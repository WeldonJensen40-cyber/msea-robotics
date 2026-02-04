import React from "react";
import { Trophy, Target, Star, Medal, ArrowRight, Zap } from "lucide-react";

const Competition = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full mb-6 border border-yellow-500/30">
            <Trophy size={18} />
            <span className="font-bold">以赛促学，直通名校</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            助力青少年
            <br />
            斩获<span className="text-yellow-400">科创大奖</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            “四极·灵变”系列产品完美适配教育部白名单赛事，提供从选题、制作到答辩的全流程竞赛解决方案。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Supported Competitions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">直通权威赛事</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CompetitionCard
              title="全国青少年科技创新大赛"
              level="国家级 (教育部白名单)"
              description="适合申报工程学、数学或计算机科学类项目。变胞机器人的创新构型极易脱颖而出。"
              tags={["工程创新", "发明制作"]}
              icon={<Star className="text-yellow-500" size={32} />}
            />
            <CompetitionCard
              title="中小学电脑制作活动"
              level="国家级 (教育部白名单)"
              description="适配“创客项目”或“机器人竞赛”赛道。提供基于 Geo-Pro 的创意编程与硬件搭建方案。"
              tags={["创客", "机器人竞技"]}
              icon={<CpuIcon />}
            />
            <CompetitionCard
              title="宋庆龄少年儿童发明奖"
              level="国家级 (公益类)"
              description="注重作品的科学性与创新性。我们的 MSEA 课程体系能完美支撑项目申报书的撰写。"
              tags={["发明奖", "人工智能"]}
              icon={<Medal className="text-red-500" size={32} />}
            />
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">往届获奖案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6 items-start">
              <img
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=300"
                alt="Student Award"
                className="w-32 h-32 rounded-xl object-cover shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  全地形自适应救援机器人
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  第36届全国青少年科技创新大赛 一等奖
                </p>
                <p className="text-gray-600 text-sm">
                  来自北京某中学的张同学，利用 Geo-Pro
                  三阶四面体构型，设计了一款能够在废墟中自由穿梭的救援机器人。评委高度评价其独特的变胞机理。
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <img
                src="https://images.unsplash.com/photo-1596496050844-4610de696e23?auto=format&fit=crop&q=80&w=300"
                alt="Student Award"
                className="w-32 h-32 rounded-xl object-cover shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  基于视觉的智能变形管家
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  中小学电脑制作活动 创客项目 最佳创意奖
                </p>
                <p className="text-gray-600 text-sm">
                  上海某小学的李同学，结合 Geo-Lite 和 AI
                  视觉模块，制作了一个能根据主人手势变形的桌面宠物，展现了极佳的互动性。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Package */}
        <section>
          <div className="bg-blue-600 rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Zap className="text-yellow-400" fill="currentColor" />
                竞赛无忧解决方案
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                不仅提供硬件，更提供专业的备赛指导。包括：项目选题咨询、技术难点攻关、申报书润色建议。
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>{" "}
                  专属导师 1对1
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>{" "}
                  备赛进度管理
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>{" "}
                  模拟答辩演练
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>{" "}
                  专利申请协助
                </li>
              </ul>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
                获取竞赛方案报价 <ArrowRight size={18} />
              </button>
            </div>
            <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-center">适合对象</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="font-bold text-yellow-400 mb-1">学校社团</div>
                  <div className="text-sm text-blue-100">
                    科技社、机器人校队
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="font-bold text-yellow-400 mb-1">培训机构</div>
                  <div className="text-sm text-blue-100">高端科创竞赛班</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="font-bold text-yellow-400 mb-1">个人选手</div>
                  <div className="text-sm text-blue-100">有升学规划的学生</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const CompetitionCard = ({ title, level, description, tags, icon }: any) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
        {level}
      </span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag: string, idx: number) => (
        <span
          key={idx}
          className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const CpuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-500"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
);

export default Competition;
