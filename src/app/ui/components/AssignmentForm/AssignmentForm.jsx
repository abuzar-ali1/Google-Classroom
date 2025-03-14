"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from '@/redux/slices/assignmentSlice';
import { setLoading } from '@/redux/slices/loadingSlice';
import {
  TextField,
  Button,
  Chip,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Divider,
  Box
} from '@mui/material';
import {
  Title as TitleIcon,
  Description as DescriptionIcon,
  AttachFile as AttachFileIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Group as GroupIcon,
  Grading as GradingIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';

const AssignmentForm = ({ assignment, classroomId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [title, setTitle] = useState(assignment?.title || '');
  const [description, setDescription] = useState(assignment?.description || '');
  const [dueDate, setDueDate] = useState(assignment?.dueDate || '');
  const [attachments, setAttachments] = useState([]);
  const [points, setPoints] = useState(assignment?.points || 100);
  const [topic, setTopic] = useState(assignment?.topic || '');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

   
    const newAssignment = {
      id: assignment?.id || Date.now().toString(),
      title,
      description,
      dueDate,
      classroomId,
      points,
      topic,
      attachments
    };

    if (assignment) {
      dispatch(updateAssignment(newAssignment));
    } else {
      dispatch(addAssignment(newAssignment));
    }

    dispatch(setLoading(true));
    router.push(`/classroom/${classroomId}/stream`);
  };

  const handleAddAttachment = () => {
    setAttachments([...attachments, { id: Date.now().toString(), name: 'example-file.pdf', url: 'https://source.unsplash.com/random/50x50?document' }]);
  };

  const handleDeleteAttachment = (id) => {
    setAttachments(attachments.filter((attachment) => attachment.id !== id));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2, bgcolor: 'background.paper' }}
    >
      {/* Title Section */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          fullWidth
          required
          error={!!errors.title}
          helperText={errors.title}
          InputProps={{
            startAdornment: <TitleIcon sx={{ color: 'action.active', mr: 1 }} />
          }}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
        />
      </FormControl>

      {/* Instructions Section */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <TextField
          label="Instructions (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
          variant="outlined"
          required
          error={!!errors.description}
          helperText={errors.description}
          InputProps={{
            startAdornment: <DescriptionIcon sx={{ color: 'action.active', mr: 1, mt: 1.5 }} />
          }}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
        />
      </FormControl>

      {/* Attachments Section */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <AttachFileIcon sx={{ mr: 1, color: 'primary.main' }} />
          Add Materials
        </Typography>
        
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleAddAttachment}
          sx={{ borderRadius: 2, textTransform: 'none' }}
        >
          Add attachment
        </Button>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          {attachments.map((attachment) => (
            <Grid item xs={12} sm={6} key={attachment.id}>
              <Chip
                avatar={<Avatar src={attachment.url} />}
                label={attachment.name}
                onDelete={() => handleDeleteAttachment(attachment.id)}
                deleteIcon={<DeleteIcon />}
                sx={{ borderRadius: 1 }}
              />
            </Grid>
          ))}
        </Grid>
      </FormControl>

      {/* Points & Due Date */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Points"
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: <Typography variant="body2">pts</Typography>
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="date"
            label="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            fullWidth
            required
            error={!!errors.dueDate}
            helperText={errors.dueDate}
            InputProps={{
              startAdornment: <ScheduleIcon sx={{ color: 'action.active', mr: 1 }} />
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />
        </Grid>
      </Grid>

      {/* Topic & Rubric */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Topic</InputLabel>
            <Select
              label="Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              startAdornment={<GroupIcon sx={{ color: 'action.active', mr: 1 }} />}
              sx={{ borderRadius: 2 }}
            >
              <MenuItem value="homework">Homework</MenuItem>
              <MenuItem value="project">Project</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GradingIcon />}
            sx={{ height: '56px', borderRadius: 2 }}
          >
            Add Rubric
          </Button>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Submit Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button


          type="submit"
          variant="contained"
          sx={{ borderRadius: 2, textTransform: 'none' }}
        >
          {assignment ? 'Update' : 'Create'} Assignment
        </Button>
      </Box>
    </Box>
  );
};

export default AssignmentForm;