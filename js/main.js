// 项目数据（JSON格式）
const projects = [
  {
    id: 1,
    name: "Decentralized Voting System",
    subtitle: "基于区块链的去中心化投票系统，确保投票过程的透明性和安全性",
    overview: "利用区块链不可篡改的特性实现公平、透明的选举流程，提供可验证的投票结果。支持多种投票模式，满足从社区决策到政府选举的不同应用场景。",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Zero-Knowledge Proof"],
    members: ["张三", "李四", "王五", "陈小"],
    github: "#",
    demo: "#"
  },

  {
    id: 3,
    name: "Cross-Chain Bridge",
    subtitle: "多链资产互通解决方案",
    overview: "构建支持多种主流公链之间的资产跨链转移服务，通过智能合约实现去中心化的资产交换和流动性提供。",
    technologies: ["Polkadot", "Cosmos SDK", "Rust", "Substrate"],
    members: ["吴天", "郑元", "王月"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    name: "DeFi Lending Platform",
    subtitle: "去中心化金融借贷协议",
    overview: "完全去中心化的数字资产借贷平台，支持超额抵押贷款、闪电贷等多种金融操作，为用户提供透明安全的借贷服务。",
    technologies: ["Aave Protocol", "Chainlink Oracle", "TypeScript", "Vyper"],
    members: ["林启", "黄杰", "郑可", "何伟"],
    github: "#",
    demo: "#"
  },
    {
    id: 4,
    name: "DeFi Lending Platform",
    subtitle: "去中心化金融借贷协议",
    overview: "完全去中心化的数字资产借贷平台，支持超额抵押贷款、闪电贷等多种金融操作，为用户提供透明安全的借贷服务。",
    technologies: ["Aave Protocol", "Chainlink Oracle", "TypeScript", "Vyper"],
    members: ["林启", "黄杰", "郑可", "何伟"],
    github: "#",
    demo: "#"
  },
    {
    id: 4,
    name: "DeFi Lending Platform",
    subtitle: "去中心化金融借贷协议",
    overview: "完全去中心化的数字资产借贷平台，支持超额抵押贷款、闪电贷等多种金融操作，为用户提供透明安全的借贷服务。",
    technologies: ["Aave Protocol", "Chainlink Oracle", "TypeScript", "Vyper"],
    members: ["林启", "黄杰", "郑可", "何伟"],
    github: "#",
    demo: "#"
  },
    {
    id: 4,
    name: "DeFi Lending Platform",
    subtitle: "去中心化金融借贷协议",
    overview: "完全去中心化的数字资产借贷平台，支持超额抵押贷款、闪电贷等多种金融操作，为用户提供透明安全的借贷服务。",
    technologies: ["Aave Protocol", "Chainlink Oracle", "TypeScript", "Vyper"],
    members: ["林启", "黄杰", "郑可", "何伟"],
    github: "#",
    demo: "#"
  }

];

// 渲染项目卡片
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  
  if (!container) {
    console.error('找不到项目容器元素');
    return;
  }
  
  // 使用DocumentFragment提高性能
  const fragment = document.createDocumentFragment();
  
  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    fragment.appendChild(projectCard);
  });
  
  container.appendChild(fragment);
}

// 创建单个项目卡片
function createProjectCard(project) {
  // 创建卡片容器
  const card = document.createElement('div');
  card.className = 'project-card';
  
  // 添加装饰角
  card.innerHTML = `
    <div class="corner-decor top-left"></div>
    <div class="corner-decor top-right"></div>
    <div class="corner-decor bottom-left"></div>
    <div class="corner-decor bottom-right"></div>
  `;
  
  // 创建卡片头部
  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  
  const projectName = document.createElement('h2');
  projectName.className = 'project-name';
  projectName.textContent = project.name;
  
  cardHeader.appendChild(projectName);
  card.appendChild(cardHeader);
  
  // 创建副标题
  const subtitle = document.createElement('h3');
  subtitle.className = 'project-subtitle';
  subtitle.textContent = project.subtitle;
  card.appendChild(subtitle);
  
  // 创建项目详情
  const details = document.createElement('div');
  details.className = 'project-details';
  
  // 添加项目概要
  const overviewItem = document.createElement('div');
  overviewItem.className = 'detail-item';
  
  const overviewTitle = document.createElement('span');
  overviewTitle.className = 'detail-title';
  overviewTitle.textContent = '概　　要';
  
  const overviewContent = document.createElement('span');
  overviewContent.className = 'detail-content';
  overviewContent.textContent = project.overview;
  
  overviewItem.appendChild(overviewTitle);
  overviewItem.appendChild(overviewContent);
  details.appendChild(overviewItem);
  
  // 添加技术栈
  const techItem = document.createElement('div');
  techItem.className = 'detail-item';
  
  const techTitle = document.createElement('span');
  techTitle.className = 'detail-title';
  techTitle.textContent = '技术栈';
  
  const techContent = document.createElement('div');
  techContent.className = 'detail-content';
  
  const techStack = document.createElement('div');
  techStack.className = 'tech-stack';
  
  project.technologies.forEach(tech => {
    const techTag = document.createElement('span');
    techTag.className = 'tech-tag';
    techTag.textContent = tech;
    techStack.appendChild(techTag);
  });
  
  techContent.appendChild(techStack);
  techItem.appendChild(techTitle);
  techItem.appendChild(techContent);
  details.appendChild(techItem);
  
  // 添加参与成员
  const membersItem = document.createElement('div');
  membersItem.className = 'detail-item';
  
  const membersTitle = document.createElement('span');
  membersTitle.className = 'detail-title';
  membersTitle.textContent = '参与成员';
  
  const membersContent = document.createElement('span');
  membersContent.className = 'detail-content';
  
  const membersList = document.createElement('div');
  membersList.className = 'members-list';
  
  project.members.forEach(member => {
    const memberTag = document.createElement('span');
    memberTag.className = 'member-tag';
    memberTag.textContent = member;
    membersList.appendChild(memberTag);
  });
  
  membersContent.appendChild(membersList);
  membersItem.appendChild(membersTitle);
  membersItem.appendChild(membersContent);
  details.appendChild(membersItem);
  
  card.appendChild(details);
  
  // 添加项目链接
  const linksContainer = document.createElement('div');
  linksContainer.className = 'links-container';
  
  const githubLink = document.createElement('a');
  githubLink.className = 'project-link';
  githubLink.href = project.github;
  githubLink.textContent = 'GitHub Repository';
  
  const demoLink = document.createElement('a');
  demoLink.className = 'project-link';
  demoLink.href = project.demo;
  demoLink.textContent = 'Demo Link';
  
  linksContainer.appendChild(githubLink);
  linksContainer.appendChild(demoLink);
  card.appendChild(linksContainer);
  
  return card;
}

// 页面加载完成后渲染项目
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});