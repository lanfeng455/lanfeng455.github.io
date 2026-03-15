// ==================== 项目数据 (你可以随时修改这里) ====================
const projectsData = [
    {
        id: 1,
        title: "孤岛 · 叙事解谜",
        category: "全栈 | Unity 游戏开发",
        year: "2026 毕业设计",
        description: "2D 横版叙事解谜游戏，讨论寿命论、虚无主义和个人成长的议题。",
        longDescription: "灵感源自《三伏》《黑森町绮谭》及世纪初免费恐怖JRPG。玩家在名为<color=#9876C5>梦世界</color>的非现实世界探索，通过收集记忆碎片，逐渐拼凑出主角<color=#FFDC88>何芰</color>的身世，实现寿命论下的价值实现。",
        image: "images/project-ISOLAND.jpg",
        techStack: ["Unity", "C#", "Shader Graph", "OOP", "Addressables"],
        // link: "https://github.com/你的用户名/darktide"
    },
    {
        id: 2,
        title: "Poppin' 面包 · 小品休闲",
        category: "全栈 | Unity 游戏开发",
        year: "2025 练习作品",
        description: "基于传统游戏“叠叠乐”的 BanG Dream! 同人作品。",
        longDescription: "基于传统游戏“叠叠乐”的 BanG Dream! 同人作品。成功应用了在实习期间学习的OOP框架，特别是弹窗类抽象/继承的策略。",
        image: "images/project-pico.jpg",
        techStack: ["Unity", "C#", "OOP", "Addressables"],
        link: "https://www.bilibili.com/video/BV1VHZRY8EfB"
    },
    {
        id: 3,
        title: "七昼梦 · 小品解谜",
        category: "全栈 | Unity 游戏开发",
        year: "2024 吉比特银奖",
        description: "2D横版解谜小品，采用叙诡的叙事方式，讲述一个陷入昏迷与自我拯救的故事。",
        longDescription: "灵感源自《梦日记》和《Ib》。玩家在现实世界与梦境世界之间探索，通过将现实物体带入梦境的方式推动剧情。独立完成从原型设计到场景搭建的工作，并且构建了基于MVC框架的对话系统。",
        image: "images/project-nanachume.jpg",
        techStack: ["Unity", "C#", "Shader Graph", "Game Jam"],
        link: "https://www.bilibili.com/video/BV1Jtc7erEFQ"
    },
    {
        id: 4,
        title: "SupermarkeT · VR Demo",
        category: "程序 | Unity 游戏开发",
        year: "2024 团队项目",
        description: "基于Google Cardboard开发的简易VR项目，以商店模拟经营作为核心玩法。",
        longDescription: "",
        image: "images/project-supermarket.jpg",
        techStack: ["Unity", "C#", "Shader", "Google VR"],
        // link: "https://你的图库链接.com"BV1VHZRY8EfB
    },
    {
        id: 5,
        title: "以乐 · 像素肉鸽",
        category: "程序、音乐音效 | Unity 游戏开发",
        year: "2024 团队项目",
        description: "操作摇摇晃晃的小汽水，通过发射气泡的方式击败各种各样的敌人，同时要防止胀气。",
        longDescription: "操作摇摇晃晃的小汽水，通过发射气泡的方式击败各种各样的敌人，同时要防止胀气。在项目中负责构建C#实时音效系统，同时制作大部分视觉特效。",
        image: "images/project-yile.jpg",
        techStack: ["Unity", "C#", "Shader Graph", "Audition"],
        // link: "https://你的专栏链接.com"
    },
    {
        id: 6,
        title: "咕咕大作战 · 派对休闲",
        category: "程序、音乐音效 | Unity 游戏开发",
        year: "2024 GGJ/福建工创赛",
        description: "治愈系双人对抗合作游戏，Demo 最早于 2024 Global Game Jam 完成。",
        longDescription: "玩家需要操作两只互相吸引的小鸡，在各自的农场里拾取道具、阻碍对方。<br>当强大的农场主降临的时候，是选择合作对抗，还是借刀杀人？",
        image: "images/project-gugu.jpg",
        techStack: ["Unity", "C#", "2D Pixel", "Game Jam", "Audition"],
        link: "https://www.bilibili.com/video/BV1Fg4y1m7i1"
    },
    {
        id: 7,
        title: "译梦人 · 回合制+卡牌",
        category: "程序 | Unity 游戏开发",
        year: "2023 团队项目",
        description: "结合回合制战斗和卡牌系统的RPG，可以通过编排卡牌顺序实现各种奇特的“化学反应”。",
        longDescription: "结合回合制战斗和卡牌系统的RPG，可以通过编排卡牌顺序实现各种奇特的“化学反应”。负责卡牌战斗的UI设计和C#功能实现。",
        image: "images/project-dice.jpg",
        techStack: ["Unity", "C#", "2D Pixel", "Game Jam"],
        link: "https://www.bilibili.com/video/BV1Kh4y1B7fd"
    },
    {
        id: 8,
        title: "一纸成书 · 现代诗",
        category: "文学创作",
        year: "2025",
        description: "将青年诗人的现代诗通过一页A4纸进行集成的“收藏品”，成本低廉。",
        longDescription: "将青年诗人的现代诗通过一页A4纸进行集成的“收藏品”，成本低廉。在福州大学城各文学社有一定影响力。",
        image: "images/project-poem.jpg",
        techStack: ["现代诗", "PhotoShop"],
        // link: "https://github.com/你的用户名/night-boat"
    },
    {
        id: 9,
        title: "Shader Graph入门分享会",
        category: "自媒体创作",
        year: "2024",
        description: "自学Shader Graph时记录的心得和经验，截至目前总播放量超过1.5万。",
        longDescription: "自学Shader Graph时记录的心得和经验，截至目前总播放量超过1.5万。以Shader Graph节点的理论解释和实际项目的上手应用为视频内核。",
        image: "images/project-shaderGraph.jpg",
        techStack: ["Shader Graph", "PhotoShop", "Premiere", "After Effects"],
        link: "https://space.bilibili.com/209197077/lists/3532951?type=season"
    },
    
];

// ==================== 文学馆数据 ====================
const writingsData = {
    "game-essay": [
        { title: "【笔记：从Games101到Unity】抗锯齿、过滤模式、Mipmap", link: "https://www.bilibili.com/read/cv39979694" },
        { title: "【笔记：从Games101到Unity】深度测试、深度缓存、拆解X-Ray效果", link: "https://www.bilibili.com/opus/1007865465336233991" },
        { title: "【笔记：从Games101到Unity】纹理贴图可不仅仅是模型/精灵的“贴纸”！", link: "https://www.bilibili.com/opus/1008146871557816352" },
        { title: "【笔记：从Games101到Unity】对X光材质的勘误、深入探究渲染队列", link: "https://www.bilibili.com/opus/1008934289395417156" }
    ],
    "short-story": [
        { title: "该模块还在开发中，请谅解！", link: "#" },
    ],
    "photo-essay": [
        { title: "该模块还在开发中，请谅解！", link: "#" },
    ],
    "dev-blog": [
        { title: "(2025) 像素游戏中，PPU的重要性", link: "https://www.bilibili.com/video/BV1Ebg7zXEF8"},
        { title: "⭐ (2025) 我生命中的第一次实习", link: "https://www.bilibili.com/video/BV1xaugzkEc3"},
        { title: "(2024) Particle System实现简单的仙女棒效果", link: "https://www.bilibili.com/video/BV1ZVtHeDE14"},
        { title: "(2024) 分开处理图像内容的思想和简易扫描线效果", link: "https://www.bilibili.com/video/BV1bryYYFE4o" },
        { title: "(2024) UI + Shader Graph的雪花屏效果", link: "https://www.bilibili.com/video/BV1JZ1qYfEPV" },
        { title: "(2024) 谁说2D不能拥有Z轴？（简易不失真的物体扭曲效果）", link: "https://www.bilibili.com/video/BV1NP4QejEBB" },
        { title: "(2024) 颜色、色彩空间与Shader Graph", link: "https://www.bilibili.com/video/BV1uDHLe6Eu2" },
        { title: "(2024) 用两个UV控制节点做出简易传送门", link: "https://www.bilibili.com/video/BV1TMeGedE7v" },
        { title: "(2024) 认识两个有趣的UV控制节点/尝试做一条电流", link: "https://www.bilibili.com/video/BV1Cbv4ehEoM" },
        { title: "(2024) 认识节点UV/Sample Texture 2D并实现马赛克处理", link: "https://www.bilibili.com/video/BV1ry411e7Fn" },
    ]
};

// ==================== 1. 渲染项目卡片 ====================
function renderProjects() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;

    grid.innerHTML = ''; // 清空

    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.id = project.id;

        // 使用图片占位，如果图片不存在则显示纯色背景
        const imageHtml = project.image 
            ? `<img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22225%22%20viewBox%3D%220%200%20400%20225%22%3E%3Crect%20width%3D%22400%22%20height%3D%22225%22%20fill%3D%22%232a2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%22%20font-size%3D%2214%22%20fill%3D%22%23a0a0a0%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3E${project.title}%3C%2Ftext%3E%3C%2Fsvg%3E'">`
            : `<div class="project-image" style="background-color: #2a2a2a; display: flex; align-items: center; justify-content: center; color: #a0a0a0;">${project.title}</div>`;

        card.innerHTML = `
            ${imageHtml}
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-year">${project.year}</span>
                <div class="project-category">${project.category}</div>
                <p class="project-description">${project.description}</p>
            </div>
        `;

        // 点击卡片打开模态框
        card.addEventListener('click', () => openModal(project));
        grid.appendChild(card);
    });
}

// ==================== 2. 渲染文学馆 ====================
function renderWritingCategories() {
    const categories = document.querySelectorAll('.category-vertical');
    const articleLists = document.querySelectorAll('.article-list');

    // 默认显示第一个分类（游戏评论）
    if (categories.length > 0 && articleLists.length > 0) {
        // 移除所有active类
        categories.forEach(c => c.classList.remove('active'));
        articleLists.forEach(list => list.classList.remove('active'));
        
        // 激活第一个分类和对应的列表
        categories[0].classList.add('active');
        const firstCategoryId = categories[0].dataset.category;
        const firstList = document.getElementById(`${firstCategoryId}-list`);
        if (firstList) firstList.classList.add('active');
    }

    // 为每个分类添加点击事件
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryId = category.dataset.category;
            
            // 切换分类的active状态
            categories.forEach(c => c.classList.remove('active'));
            category.classList.add('active');
            
            // 隐藏所有文章列表
            articleLists.forEach(list => list.classList.remove('active'));
            
            // 显示对应的文章列表
            const targetList = document.getElementById(`${categoryId}-list`);
            if (targetList) {
                targetList.classList.add('active');
            }
        });
    });
}

// ==================== 3. 动态填充文章列表 ====================
function populateWritingLists() {
    // 填充游戏评论
    const gameEssayList = document.getElementById('game-essay-list');
    if (gameEssayList && writingsData['game-essay']) {
        gameEssayList.innerHTML = '';
        writingsData['game-essay'].forEach(item => {
            const link = document.createElement('a');
            link.href = item.link;
            link.className = 'article-item';
            link.textContent = item.title;
            link.target = '_blank';
            gameEssayList.appendChild(link);
        });
    }

    // 填充短篇小说
    const shortStoryList = document.getElementById('short-story-list');
    if (shortStoryList && writingsData['short-story']) {
        shortStoryList.innerHTML = '';
        writingsData['short-story'].forEach(item => {
            const link = document.createElement('a');
            link.href = item.link;
            link.className = 'article-item';
            link.textContent = item.title;
            link.target = '_blank';
            shortStoryList.appendChild(link);
        });
    }

    // 填充摄影随笔
    const photoEssayList = document.getElementById('photo-essay-list');
    if (photoEssayList && writingsData['photo-essay']) {
        photoEssayList.innerHTML = '';
        writingsData['photo-essay'].forEach(item => {
            const link = document.createElement('a');
            link.href = item.link;
            link.className = 'article-item';
            link.textContent = item.title;
            link.target = '_blank';
            photoEssayList.appendChild(link);
        });
    }

    // 填充开发札记
    const devBlogList = document.getElementById('dev-blog-list');
    if (devBlogList && writingsData['dev-blog']) {
        devBlogList.innerHTML = '';
        writingsData['dev-blog'].forEach(item => {
            const link = document.createElement('a');
            link.href = item.link;
            link.className = 'article-item';
            link.textContent = item.title;
            link.target = '_blank';
            devBlogList.appendChild(link);
        });
    }
}

// ==================== 4. 弹窗功能 ====================
const modal = document.getElementById('project-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');
const modalBody = document.querySelector('.modal-body');

// 修改 openModal 函数，增加更丰富的状态判断
function openModal(project) {
    if (!modal || !modalBody) return;

    // 构建技术栈标签
    const techStackHtml = project.techStack 
        ? project.techStack.map(tech => `<span>${tech}</span>`).join('')
        : '';

    // 更智能的链接处理
    let linkHtml = '';
    if (!project.link) {
        linkHtml = `<p class="modal-no-link">🔒 该作品暂无线上详情 · 可线下演示</p>`;
    } else if (project.link === 'internal') {
        linkHtml = `<p class="modal-no-link internal">📦 内部项目 · 暂不公开</p>`;
    } else if (project.link === 'coming') {
        linkHtml = `<p class="modal-no-link coming">🚧 详情页正在建设中 · 敬请期待</p>`;
    } else {
        linkHtml = `<a href="${project.link}" class="modal-link" target="_blank">查看项目详情 →</a>`;
    }

    // 填充内容
    modalBody.innerHTML = `
        <img class="modal-image" src="${project.image}" alt="${project.title}" onerror="this.src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22300%22%20viewBox%3D%220%200%20600%20300%22%3E%3Crect%20width%3D%22600%22%20height%3D%22300%22%20fill%3D%22%232a2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20fill%3D%22%23a0a0a0%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3E${project.title}%3C%2Ftext%3E%3C%2Fsvg%3E'">
        <h3 class="modal-title">${project.title}</h3>
        <p class="modal-description">${project.longDescription || project.description}</p>
        <div class="modal-tech-stack">
            ${techStackHtml}
        </div>
        ${linkHtml}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = ''; // 恢复滚动
}

// ==================== 5. 事件监听 ====================
function initEventListeners() {
    // 弹窗关闭事件
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // 按ESC关闭弹窗
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // 导航卡片点击平滑滚动
    document.querySelectorAll('.nav-card').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==================== 6. 页面初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 渲染项目卡片
    renderProjects();
    
    // 填充文章列表内容
    populateWritingLists();
    
    // 初始化文学馆交互
    renderWritingCategories();
    
    // 初始化其他事件
    initEventListeners();

    // 可选：控制台提示
    console.log('🎮 个人作品集网站已加载完成');
    console.log('📝 当前项目数量：', projectsData.length);
    console.log('📚 文学馆分类数量：', Object.keys(writingsData).length);
});