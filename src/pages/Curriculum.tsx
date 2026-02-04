import React, { useState } from "react";
import {
  BookOpen,
  Cpu,
  Award,
  Play,
  ChevronDown,
  ChevronUp,
  Layers,
  PenTool,
  Code,
  GraduationCap,
} from "lucide-react";

const Curriculum = () => {
  const [activeModule, setActiveModule] = useState<number | null>(0);

  const modules = [
    {
      id: 0,
      icon: <Layers size={32} />,
      title: "Mathematics",
      subtitle: "机械设计与空间几何",
      color: "bg-blue-600",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
      description:
        "从柏拉图多面体出发，探索空间闭链机构的几何奥秘。通过 SolidWorks 建模，直观理解自由度、二面角与拓扑变换。",
      projects: ["正四面体结构搭建", "连杆机构自由度计算", "三维建模基础"],
      skills: ["空间思维", "CAD 建模", "几何分析"],
    },
    {
      id: 1,
      icon: <Cpu size={32} />,
      title: "Science",
      subtitle: "电子硬件与嵌入式控制",
      color: "bg-indigo-600",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      description:
        "揭秘机器人的神经系统。学习主控板（ESP32/Arduino）与总线舵机的通信协议，掌握 IMU 姿态传感器的物理原理。",
      projects: ["舵机控制电路设计", "传感器数据读取", "电源管理系统"],
      skills: ["电路原理", "嵌入式开发", "信号处理"],
    },
    {
      id: 2,
      icon: <Code size={32} />,
      title: "Engineering",
      subtitle: "运动规划与编程逻辑",
      color: "bg-purple-600",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
      description:
        "赋予机器人灵魂。从基础的步态设计到复杂的越障算法，通过 Python/C++ 编写控制程序，实现机器人的自主决策。",
      projects: ["翻滚步态算法实现", "自主避障逻辑", "多机协同编队"],
      skills: ["Python/C++", "算法逻辑", "系统集成"],
    },
    {
      id: 3,
      icon: <PenTool size={32} />,
      title: "Art",
      subtitle: "艺术与科研探究",
      color: "bg-orange-600",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
      description:
        "不仅是工程，更是艺术。探索机械律动之美，结合仿生学原理设计全新的变胞构型，开展跨学科创新科研。",
      projects: ["机械舞步编排", "仿生构型设计", "科研论文撰写"],
      skills: ["审美设计", "创新思维", "学术写作"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            MSEA 进阶式课程体系
          </h1>
          <p className="text-xl text-gray-600">
            不仅仅是教具，更是一套
            <span className="text-blue-600 font-bold">通往未来工程师</span>
            的完整解决方案。
            <br />
            融合数学、科学、工程与艺术，培养跨学科创新能力。
          </p>
        </div>

        {/* Interactive Module Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 border-2 ${
                  activeModule === module.id
                    ? `border-transparent shadow-lg ${module.color} text-white transform scale-105`
                    : "bg-white border-transparent hover:border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${activeModule === module.id ? "bg-white/20" : "bg-gray-100 text-gray-500"}`}
                >
                  {module.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{module.title}</h3>
                  <p
                    className={`text-sm ${activeModule === module.id ? "text-white/80" : "text-gray-400"}`}
                  >
                    {module.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 h-full">
              {modules.map(
                (module) =>
                  activeModule === module.id && (
                    <div key={module.id} className="animate-fade-in">
                      <div className="flex items-center gap-4 mb-8">
                        <div
                          className={`p-4 rounded-2xl ${module.lightColor} ${module.textColor}`}
                        >
                          {module.icon}
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900">
                            {module.subtitle}
                          </h2>
                          <p
                            className={`text-lg font-medium ${module.textColor}`}
                          >
                            {module.title} Module
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        {module.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <BookOpen size={20} className="text-gray-400" />{" "}
                            核心项目
                          </h4>
                          <ul className="space-y-3">
                            {module.projects.map((project, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100"
                              >
                                <span
                                  className={`w-2 h-2 rounded-full ${module.color}`}
                                ></span>
                                {project}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <GraduationCap
                              size={20}
                              className="text-gray-400"
                            />{" "}
                            能力培养
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {module.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${module.lightColor} ${module.textColor}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>

        {/* Resources Download */}
        <div className="bg-gray-900 rounded-3xl p-12 text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">配套教学资源库</h2>
              <p className="text-gray-400 mb-8">
                购买产品即可获得全套数字课程资源，包含教学
                PPT、视频教程、示例代码及教师指导手册。
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-colors inline-flex items-center gap-2">
                <BookOpen size={20} />
                预览课程大纲
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ResourceCard
                title="教学 PPT"
                count="20+ 章节"
                icon={<Layers />}
              />
              <ResourceCard
                title="视频教程"
                count="500+ 分钟"
                icon={<Play />}
              />
              <ResourceCard
                title="示例代码"
                count="GitHub 开源"
                icon={<Code />}
              />
              <ResourceCard
                title="教师手册"
                count="完整教案"
                icon={<BookOpen />}
              />
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-900/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

const ResourceCard = ({ title, count, icon }: any) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
    <div className="text-blue-400 mb-3">{icon}</div>
    <h3 className="font-bold text-lg mb-1">{title}</h3>
    <p className="text-sm text-gray-400">{count}</p>
  </div>
);

export default Curriculum;
