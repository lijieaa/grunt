/**
 * Created by Administrator on 15-7-23.
 */
//包函数
module.exports = function(grunt){
    //任务配置，所有插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg:grunt.file.readJSON("package.json"),
        //uglify压缩插件的配置信息
        uglify:{
            options:{
                stripBanners:true,
                banner:'/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd")%>*/\n'
            },
            build:{
                src:'src/*.js',
                dest:'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
            }
        },
        jshint:{
            build:['Gruntfile.js','src/*js'],
            options:{
//                jshintrc:'.jshintrc'
            }
        }
    });
    //告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //检查语法错误
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //告诉grunt当我们的终端中输入grunt时需要做些什么（注意先后顺序）
    grunt.registerTask('default',['uglify','jshint']);
};