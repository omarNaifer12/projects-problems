using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controller
{
     [Route("api/NewFirstApi")]
    [ApiController]
    // [Route("api/[controller]")]
   
    public class NewFirstApiController : ControllerBase
    {
         [HttpGet]
        public string getMyName()
        {
            return "my name is omar naifer";
        }

        [HttpGet("N")]

        public int returnSum2Numbers(int Num1,int Num2){
            
            return Num1 + Num2;
        }
    }
}