using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using WebApp.Data;
using WebApp.Interfaces;
using WebApp.Services;

namespace WebApp
{
    public class Startup
    {
        readonly string CorsPolicy = "CorsPolicy";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(CorsPolicy,
                builder =>
                {
                    builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                });
            });

            //Add DI services here
            services.AddScoped<ICollectionService, CollectionService>();

            //TODO: Move the data source string to the appsettings.json
            services.AddDbContext<CompendiumDbContext>(options => options.UseSqlite("Data Source=compendium.db"));
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            //For some dumb reason CORS must go in between "UseRouting" and "UseEndpoints" 
            //It WILL NOT WORK otherwise
            app.UseCors(CorsPolicy);

            app.UseEndpoints(endpoints =>
            {
                //https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-3.1#enable-cors-with-endpoint-routing
                endpoints.MapControllers().RequireCors(CorsPolicy);
            });
        }
    }
}
