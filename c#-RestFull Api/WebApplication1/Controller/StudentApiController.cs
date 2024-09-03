using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.model;
using WebApplication1.DataSimulation;

namespace WebApplication1.Controller
{
    [ApiController]
    [Route("api/students")]
    public class StudentApiController : ControllerBase
    {
        [HttpGet("All",Name="GetAllStudent")]

        [ProducesResponseType(StatusCodes.Status200OK)]
           
        public ActionResult <IEnumerable<student>> GetAllStudent(){
            return Ok(StudentDataSimulation.StudentsList);
        }

        [HttpGet("passed",Name="GetPassedStudent")]
        public ActionResult <IEnumerable<student>> GetPassedStudent(){
            var passedStudent=StudentDataSimulation.StudentsList.Where(Student=>Student.Grade>=50).ToList();
            return Ok(passedStudent);
        }

         [HttpGet("grade",Name="GetAverageGrade")]

         [ProducesResponseType(StatusCodes.Status200OK)]
         [ProducesResponseType(StatusCodes.Status404NotFound)]

        public ActionResult <double> GetAverageGrade()
        {
            if(StudentDataSimulation.StudentsList.Count==0)
            {
                return NotFound("no student have founded");
            }
            var avg=StudentDataSimulation.StudentsList.Average(Student=>Student.Grade);
            return Ok(avg);
        }

           [HttpGet("{id}",Name="GetStudentByID")]

           [ProducesResponseType(StatusCodes.Status200OK)]
           [ProducesResponseType(StatusCodes.Status400BadRequest)]
           [ProducesResponseType(StatusCodes.Status404NotFound)]
        
        public ActionResult <student> GetStudentByID(int id)
        {
            if(id<1)
            {
                return  BadRequest($"the student {id} not accepted ");
            }

            var Student=StudentDataSimulation.StudentsList.FirstOrDefault(s=>s.Id==id);
            if(Student==null)
            {
                return NotFound($"no student {id} have founded");
            }
            return Ok(Student);
        }
           [HttpPost(Name = "CreateStudent")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<student> CreateStudent([FromBody] student newStudent)
        {
            if (newStudent == null || string.IsNullOrWhiteSpace(newStudent.Name))
            {
                return BadRequest("Invalid student data.");
            }

            newStudent.Id = StudentDataSimulation.StudentsList.Max(s => s.Id) + 1; // Generate new ID
            StudentDataSimulation.StudentsList.Add(newStudent);
            return CreatedAtRoute("GetStudentByID", new { id = newStudent.Id }, newStudent);
        }

        // Update (PUT)
        [HttpPut("{id}", Name = "UpdateStudent")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult UpdateStudent(int id, [FromBody] student updatedStudent)
        {
            if (id < 1 || updatedStudent == null || id != updatedStudent.Id)
            {
                return BadRequest("Invalid student data.");
            }

            var student = StudentDataSimulation.StudentsList.FirstOrDefault(s => s.Id == id);
            if (student == null)
            {
                return NotFound($"No student with ID {id} found.");
            }

            student.Name = updatedStudent.Name;
            student.Age = updatedStudent.Age;
            student.Grade = updatedStudent.Grade;

            return Ok(student);
        }

        // Delete (DELETE)
        [HttpDelete("{id}", Name = "DeleteStudent")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult DeleteStudent(int id)
        {
            if (id < 1)
            {
                return BadRequest($"The student ID {id} is not accepted.");
            }

            var student = StudentDataSimulation.StudentsList.FirstOrDefault(s => s.Id == id);
            if (student == null)
            {
                return NotFound($"No student with ID {id} found.");
            }

            StudentDataSimulation.StudentsList.Remove(student);
            return Ok($"Student with ID {id} has been deleted.");
        }

    }
}