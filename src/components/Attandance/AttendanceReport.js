import React from "react";

export function AttendanceReport({ students }) {
    return (
      <div>
        <h2>Attendance Report</h2>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.name}: {student.attendance || "Not Marked"}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  
