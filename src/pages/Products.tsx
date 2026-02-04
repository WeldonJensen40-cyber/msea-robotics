import React, { useState } from "react";
import {
  Check,
  X,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Download,
} from "lucide-react";
import geoLiteImg from "../assets/geo-lite.png";
import geoProImg from "../assets/geo-pro.png";
import geoProMaxImg from "../assets/geo-pro-max.png";

const Products = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            不仅仅是机器人，
            <br />
            更是<span className="text-blue-600">思维的载体</span>
          </h1>
          <p className="text-xl text-gray-600">
            从基础入门到科研竞赛，我们提供全方位的硬件支持与课程体系。
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Geo-Lite */}
          <ProductDetailCard
            title="Geo-Lite"
            subtitle="基础探究版"
            price="¥499"
            description="专为中小学设计，安全易上手。通过模块化拼搭，轻松实现从平面到空间的形态变换。"
            features={[
              "6个标准数字舵机",
              "Scratch 图形化编程",
              "APP 蓝牙遥控",
              "10+ 基础课程案例",
            ]}
            image={geoLiteImg}
            color="blue"
          />

          {/* Geo-Pro (Tetra) */}
          <ProductDetailCard
            title="Geo-Pro"
            subtitle="三阶四面体版"
            price="¥1,500"
            description="全R副闭链结构，完美还原北交大科研成果。支持复杂步态规划，是学习机构学的最佳教具。"
            features={[
              "12个总线舵机",
              "Python / C++ 开发",
              "IMU 姿态解算",
              "支持科研二次开发",
            ]}
            image={geoProImg}
            color="purple"
            recommended
          />

          {/* Geo-Pro (Prism) */}
          <ProductDetailCard
            title="Geo-Pro Max"
            subtitle="三棱柱进阶版"
            price="¥1,899"
            description="冗余驱动设计，具备更强的越障能力与负载能力。适合参加高水平科创竞赛与课题研究。"
            features={[
              "9个总线舵机",
              "高扭矩冗余驱动",
              "复杂地形适应",
              "竞赛级算法支持",
            ]}
            image={geoProMaxImg}
            color="orange"
          />
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16">
          <div className="p-8 bg-gray-900 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">详细参数对比</h2>
            <p className="text-gray-400">选择最适合你的科研伙伴</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-6 text-gray-500 font-medium w-1/4">
                    功能特性
                  </th>
                  <th className="p-6 text-gray-900 font-bold text-xl w-1/4 text-center">
                    Geo-Lite
                  </th>
                  <th className="p-6 text-blue-600 font-bold text-xl w-1/4 text-center bg-blue-50/50">
                    Geo-Pro
                  </th>
                  <th className="p-6 text-orange-600 font-bold text-xl w-1/4 text-center">
                    Geo-Pro Max
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <TableRow
                  label="适用学段"
                  v1="小学高年级 - 初中"
                  v2="初中 - 高中 - 本科"
                  v3="高中 - 本科 - 研究生"
                />
                <TableRow
                  label="构型原理"
                  v1="开链/简单闭链"
                  v2="三阶四面体 (闭链)"
                  v3="三棱柱 (冗余闭链)"
                  highlight
                />
                <TableRow
                  label="驱动方式"
                  v1="6 x PWM 舵机"
                  v2="12 x 总线舵机 (串行)"
                  v3="9 x 总线舵机 (串行)"
                />
                <TableRow
                  label="最大扭矩"
                  v1="15 kg·cm"
                  v2="25 kg·cm"
                  v3="35 kg·cm"
                />
                <TableRow
                  label="编程语言"
                  v1="Scratch / Mixly"
                  v2="Python / C++ / Arduino"
                  v3="Python / C++ / ROS"
                />
                <TableRow
                  label="传感器支持"
                  v1="超声波 / 红外"
                  v2="+ IMU / 视觉模块"
                  v3="+ 激光雷达 / 深度相机"
                />
                <TableRow
                  label="变形能力"
                  v1="基础折叠"
                  v2="全自由度重构"
                  v3="高冗余复杂重构"
                  highlight
                />
                <TableRow
                  label="续航时间"
                  v1="45 分钟"
                  v2="60 分钟"
                  v3="90 分钟"
                />
                <TableRow
                  label="二次开发"
                  v1={<X className="inline text-gray-300" />}
                  v2={<Check className="inline text-green-500" />}
                  v3={<Check className="inline text-green-500" />}
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              不确定选哪款？
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              下载完整产品手册，查看详细的技术规格说明书与课程大纲。
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center gap-2">
              <Download size={20} />
              下载产品白皮书 (PDF)
            </button>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-700 opacity-50"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

const ProductDetailCard = ({
  title,
  subtitle,
  price,
  description,
  features,
  image,
  color,
  recommended = false,
}: any) => {
  const colorClasses = {
    blue: "border-blue-200 hover:border-blue-400",
    purple: "border-purple-200 hover:border-purple-400",
    orange: "border-orange-200 hover:border-orange-400",
  };

  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 flex flex-col relative ${recommended ? "border-blue-500 transform scale-105 z-10" : "border-transparent"}`}
    >
      {recommended && (
        <div className="bg-blue-600 text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
          主要推荐
        </div>
      )}
      <div className="h-56 overflow-hidden relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-6 text-white">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-200 text-sm">{subtitle}</p>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 ml-2">/ 套</span>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-gray-700">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${recommended ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
              >
                <Check size={14} strokeWidth={3} />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 ${recommended ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-900 text-white hover:bg-gray-800"}`}
        >
          <ShoppingCart size={18} />
          立即咨询
        </button>
      </div>
    </div>
  );
};

const TableRow = ({ label, v1, v2, v3, highlight = false }: any) => (
  <tr
    className={`hover:bg-gray-50 transition-colors ${highlight ? "bg-blue-50/30" : ""}`}
  >
    <td className="p-6 text-gray-500 font-medium border-b border-gray-100">
      {label}
    </td>
    <td className="p-6 text-gray-900 border-b border-gray-100 text-center">
      {v1}
    </td>
    <td
      className={`p-6 text-gray-900 border-b border-gray-100 text-center font-medium ${highlight ? "text-blue-700" : ""} bg-blue-50/20`}
    >
      {v2}
    </td>
    <td className="p-6 text-gray-900 border-b border-gray-100 text-center">
      {v3}
    </td>
  </tr>
);

export default Products;
