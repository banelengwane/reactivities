using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.commands
{
    public class EditActivity
    {
        public class Command : IRequest
        {
            public required Activity Activity { get; set; }
        }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
      public async Task Handle(Command request, CancellationToken cancellationToken)
      {
        var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken)
          ?? throw new Exception("Cannot find activity");
        
        activity.Title = request.Activity.Title;

        await context.SaveChangesAsync(cancellationToken);
      }
    }
  }

    
}