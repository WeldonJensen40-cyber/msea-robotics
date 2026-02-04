import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">四极·灵变</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              源自北京交通大学顶尖机构学实验室，致力于将前沿变胞机器人技术转化为青少年的创造力工具。
              MSEA 教育理念的先行者。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/products" className="hover:text-white transition-colors">产品中心</a></li>
              <li><a href="/curriculum" className="hover:text-white transition-colors">课程体系</a></li>
              <li><a href="/competition" className="hover:text-white transition-colors">科创竞赛</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">关于我们</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">联系我们</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <span>北京市海淀区西直门外上园村3号<br/>北京交通大学机械工程楼</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <span>010-5168XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <span>contact@bjtu-robotics.edu.cn</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} 四极·灵变团队 版权所有. 北京交通大学机构学实验室支持.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;