using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CF.Week1.Projects.Startup))]
namespace CF.Week1.Projects
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
