import React from "react";
import {
  Award,
  BookOpen,
  Users,
  Building,
  FileText,
  Microscope,
} from "lucide-react";
import yaoyananImg from "../assets/yaoyanan.png";
import liuranImg from "../assets/liuran.jpg";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            源自北交大，深耕二十载
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            我们是北京交通大学机构学实验室的成果转化团队，致力于将最前沿的机器人技术带入青少年的课堂。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Core Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Users className="text-blue-600" /> 核心团队
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <TeamMember
              name="姚燕安 教授"
              role="首席科学家"
              title="北京交通大学教授 / 博士生导师"
              description="MSEA 教育理念提出者，几何机器人领域学术带头人。长期致力于变胞机构与可重构机器人的基础理论与应用研究。"
              image={yaoyananImg}
            />
            <TeamMember
              name="刘然 副教授"
              role="研发总监"
              title="北京交通大学副教授"
              description="主导多款变胞机器人的结构设计与控制算法研发。拥有丰富的机器人竞赛指导经验，多次带领学生获得国家级大奖。"
              image={liuranImg}
            />
          </div>
        </section>

        {/* Research Sourcing (Challenge Cup Special) */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Microscope className="text-blue-600" /> 科研溯源
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Patents */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold">核心专利墙</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded mt-1">
                    发明
                  </span>
                  <span>
                    一种全R副三阶四面体可重构机构
                    <br />
                    <span className="text-sm text-gray-400">
                      ZL 2018 1 XXXX XXX.X
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded mt-1">
                    发明
                  </span>
                  <span>
                    一种基于多环闭链的空间变胞机器人步态控制系统
                    <br />
                    <span className="text-sm text-gray-400">
                      ZL 2020 1 XXXX XXX.X
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded mt-1">
                    实用
                  </span>
                  <span>一种模块化可重构教育机器人关节模组</span>
                </li>
              </ul>
            </div>

            {/* Papers */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold">顶刊论文成果</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="pb-4 border-b border-gray-200 last:border-0">
                  <p className="font-semibold text-gray-800 mb-1">
                    Kinematic Analysis of a Third-order Tetrahedral
                    Reconfigurable Mechanism
                  </p>
                  <p className="text-sm text-blue-600 italic">
                    Mechanism and Machine Theory, 2021
                  </p>
                </li>
                <li className="pb-4 border-b border-gray-200 last:border-0">
                  <p className="font-semibold text-gray-800 mb-1">
                    MSEA: A New Framework for STEAM Education based on Geometric
                    Robotics
                  </p>
                  <p className="text-sm text-blue-600 italic">
                    International Journal of STEM Education, 2023
                  </p>
                </li>
              </ul>
            </div>

            {/* Lab Background */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                  <Building size={24} />
                </div>
                <h3 className="text-xl font-bold">实验室背书</h3>
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-gray-800">
                  北京交通大学
                  <br />
                  教育部载运工具先进制造与测控技术重点实验室
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Key Laboratory of Vehicle Advanced Manufacturing, Measuring and Control Technology, Ministry of Education
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                实验室长期从事机构学基础理论及其在机器人工程中的应用研究，承担多项国家自然科学基金重点项目及国家“863”计划项目。
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600">
                  国家自然科学基金
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600">
                  863计划
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">发展历程</h2>
          <div className="max-w-3xl mx-auto border-l-2 border-blue-200 pl-8 space-y-12">
            <TimelineItem
              year="2018"
              title="科研突破"
              description="姚燕安教授团队首次提出全R副三阶四面体可重构机构，并获得国家发明专利授权。"
            />
            <TimelineItem
              year="2020"
              title="教育转化启动"
              description="确立 MSEA 教育理念，开始研发面向青少年的简化版变胞机器人套件。"
            />
            <TimelineItem
              year="2022"
              title="产品定型"
              description="Geo-Lite 与 Geo-Pro 系列完成原型机验证，并在北京市多所中学进行试点教学。"
            />
            <TimelineItem
              year="2024"
              title="商业化落地"
              description="“四极·灵变”品牌正式成立，备战“挑战杯”全国大学生课外学术科技作品竞赛。"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const TeamMember = ({ name, role, title, description, image }: any) => (
  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
    />
    <div>
      <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
      <p className="text-blue-600 font-semibold mb-1">{role}</p>
      <p className="text-sm text-gray-500 mb-3">{title}</p>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const TimelineItem = ({ year, title, description }: any) => (
  <div className="relative">
    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
    <span className="text-blue-600 font-bold text-lg block mb-1">{year}</span>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
