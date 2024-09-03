using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.model;

namespace WebApplication1.DataSimulation
{
    public class StudentDataSimulation
    {
       public static readonly List<student> StudentsList = new List<student>
        {
            new student { Id = 1, Name = "Omar Naifer", Age = 20, Grade = 90 },
            new student { Id = 2, Name = "Sarah Johnson", Age = 22, Grade = 85 },
            new student { Id = 3, Name = "John Doe", Age = 21, Grade = 75 },
            new student { Id = 4, Name = "Alice Smith", Age = 19, Grade = 95 },
            new student { Id = 5, Name = "Michael Brown", Age = 23, Grade = 80 }
        };
    }
}