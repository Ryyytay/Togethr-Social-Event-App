using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Profiles.Commands;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProfilesController : BaseApiController
    {
        [HttpPost("add-photo")]
        public async Task<ActionResult<Photo>> AddPhoto([FromForm]IFormFile file)
        {
            return HandleResult(await Mediator.Send(new AddPhoto.Command{File = file}));
        }
    }
}