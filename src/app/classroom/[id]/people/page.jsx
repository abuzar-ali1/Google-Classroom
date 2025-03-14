"use client"

import ClassroomHeader from "@/app/ui/components/ClassroomHeader/ClassroomHeader";
import { classrooms } from "@/data/data";
import { setLoading } from "@/redux/slices/loadingSlice";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function PeopleContent() {
  const classroom = classrooms.find(
    (classroom) => classroom.id === Number(useParams().id)
  );
  if (!classroom) {
    return <div>Classroom not found</div>;
  }

  const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(setLoading(false))
  },[])
  
    return (
      <div>
        <div>
        <ClassroomHeader classroomId={classroom.id}/>

        </div>
        <h2 className="text-xl font-bold mb-4">People</h2>
        <p>Announcements and updates go here.</p>
      </div>
    );
  }