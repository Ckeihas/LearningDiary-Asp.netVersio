using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheRealLearningDiary.Models;

namespace TheRealLearningDiary.Data
{
    public class TheRealLearningDiaryContext : DbContext
    {
        public TheRealLearningDiaryContext (DbContextOptions<TheRealLearningDiaryContext> options)
            : base(options)
        {
        }

        public DbSet<TheRealLearningDiary.Models.Topic> Topic { get; set; }
    }
}
