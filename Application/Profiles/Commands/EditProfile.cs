using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using MediatR;

namespace Application.Profiles.Commands
{
    public class EditProfile
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string DisplayName { get; set; } = string.Empty;

            public string Bio { get; set; } = string.Empty;

        }
    }
}