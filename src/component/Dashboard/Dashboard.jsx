import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  const students = [
    {
      id: 1,
      name: "John",
      marks: {
        chemistry: 85,
        math: 90,
        physics: 95,
      },
    },
    {
      id: 2,
      name: "Emily",
      marks: {
        chemistry: 80,
        math: 92,
        physics: 89,
      },
    },
    {
      id: 3,
      name: "David",
      marks: {
        chemistry: 78,
        math: 85,
        physics: 87,
      },
    },
    {
      id: 4,
      name: "Sarah",
      marks: {
        chemistry: 90,
        math: 92,
        physics: 93,
      },
    },
    {
      id: 5,
      name: "Michael",
      marks: {
        chemistry: 92,
        math: 87,
        physics: 88,
      },
    },
    {
      id: 6,
      name: "Lucy",
      marks: {
        chemistry: 85,
        math: 88,
        physics: 90,
      },
    },
    {
      id: 7,
      name: "Tom",
      marks: {
        chemistry: 75,
        math: 80,
        physics: 85,
      },
    },
    {
      id: 8,
      name: "Emma",
      marks: {
        chemistry: 89,
        math: 92,
        physics: 95,
      },
    },
    {
      id: 9,
      name: "Oliver",
      marks: {
        chemistry: 82,
        math: 85,
        physics: 90,
      },
    },
    {
      id: 10,
      name: "Sophie",
      marks: {
        chemistry: 90,
        math: 95,
        physics: 92,
      },
    },
  ];
  const data = students.map((student) => ({
    name: student.name,
    chemistry: student.marks.chemistry,
    math: student.marks.math,
    physics: student.marks.physics,
  }));
  console.log(data);
  return (
    <div>
      <LineChart width={700} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="chemistry" stroke="#8884d8" />
        <Line type="monotone" dataKey="math" stroke="#82ca9d" />
        <Line type="monotone" dataKey="physics" stroke="#ffc658" />
      </LineChart>
    </div>
  );
};

export default Dashboard;
