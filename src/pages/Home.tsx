import React from "react";
import {
  ArrowRight,
  ChevronRight,
  Play,
  BookOpen,
  Cpu,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import geoLiteImg from "../assets/geo-lite.png";
import geoProImg from "../assets/geo-pro.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/60 z-10" />
        <img
          src={geoProImg}
          alt="Robot Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
            从搭积木，到造<span className="text-blue-400">变形金刚</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            基于北交大顶尖科研成果，开启空间思维新维度。
            <br />
            <span className="text-blue-300 font-semibold">MSEA</span> 教育理念
            —— 让几何重构世界。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              探索产品 <ArrowRight size={20} />
            </Link>
            <Link
              to="/competition"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              科创竞赛 <Award size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Advantages (MSEA) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              为什么选择“四极·灵变”？
            </h2>
            <p className="text-xl text-gray-600">
              源自北交大实验室，独创 MSEA 教育体系
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-blue-600" />}
              title="Mathematics"
              subtitle="数学与空间几何"
              description="通过机器人形态变换，直观理解二面角、拓扑结构等复杂几何概念。"
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8 text-indigo-600" />}
              title="Science"
              subtitle="科学与电子硬件"
              description="探究多机协同逻辑，深入理解嵌入式控制与传感器原理。"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-purple-600" />}
              title="Engineering"
              subtitle="工程与编程逻辑"
              description="从 Python 到 C++，掌握高阶运动规划与步态算法。"
            />
            <FeatureCard
              icon={<Play className="w-8 h-8 text-orange-600" />}
              title="Art"
              subtitle="艺术与科研探究"
              description="感受机械律动之美，激发跨学科创新科研灵感。"
            />
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                产品系列
              </h2>
              <p className="text-lg text-gray-600">
                满足从入门到科研的全阶段需求
              </p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              查看全部 <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Geo-Lite */}
            <ProductCard
              image={geoLiteImg}
              title="Geo-Lite 基础版"
              tag="入门首选"
              description="专为中小学生打造的空间思维启蒙套件。6个标准舵机驱动，支持 Scratch 图形化编程，轻松上手变胞机器人。"
              price="¥799 起"
            />
            {/* Geo-Pro */}
            <ProductCard
              image={geoProImg}
              title="Geo-Pro 科研版"
              tag="挑战杯神器"
              description="全R副三阶四面体/三棱柱构型。8-9个总线舵机，支持 Python/C++ 高级开发，完美适配高阶科研与竞赛。"
              price="¥1,700 起"
            />
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              查看全部 <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  subtitle,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
    <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
    <h4 className="text-blue-600 font-medium mb-4">{subtitle}</h4>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ProductCard = ({
  image,
  title,
  tag,
  description,
  price,
}: {
  image: string;
  title: string;
  tag: string;
  description: string;
  price: string;
}) => (
  <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
    <div className="relative h-64 overflow-hidden">
      <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
        {tag}
      </div>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-2xl font-bold text-gray-900">{price}</span>
        <Link
          to="/products"
          className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
        >
          查看详情
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
