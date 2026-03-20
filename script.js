document.addEventListener("DOMContentLoaded", () => {
    
    // 13 Unvisited Prefectures
    const unvisited = [
        '青森', '秋田', '岩手', '山形', 
        '兵庫', '和歌山', '鳥取', '島根', '山口', 
        '佐賀', '大分', '宮崎', '沖縄'
    ];

    // Articles Data
    // Articles Data with Thumbnail URLs
    const articlesMap = {
        '北海道': [
            {
                title: '【北海道旅行】試合を見なくても大満足！エスコンフィールドの「スタジアムツアー」でベンチに潜入してきた⚾️🔥',
                url: 'https://note.com/ripe_spirea6186/n/n01be01856766',
                imgUrl: 'https://assets.st-note.com/production/uploads/images/133614275/picture_pc_1ab7ecfe914b4fbfa9ba6be59a68e64e.png'
            },
            {
                title: '【北海道旅行】おばあちゃんと行く小樽満喫旅！絶景の夜景と水面に映る「夜の運河」が最高すぎた⛄️✨',
                url: 'https://note.com/ripe_spirea6186/n/n819cc277e6a7',
                imgUrl: 'https://assets.st-note.com/production/uploads/images/133614275/picture_pc_1ab7ecfe914b4fbfa9ba6be59a68e64e.png'
            },
            {
                title: '【Antigravity】おばあちゃんと2人で旅行に行くから、旅のしおりをノーコードで作ってみた！',
                url: 'https://note.com/ripe_spirea6186/n/nc9ce121ba61c',
                imgUrl: 'https://assets.st-note.com/production/uploads/images/133614275/picture_pc_1ab7ecfe914b4fbfa9ba6be59a68e64e.png'
            }
        ],
        '長野': [
            {
                title: 'スノボで立てない!? 悲劇のスキー旅行から、Geminiで「ゆる体幹トレアプリ」を作った話⛄️📱',
                url: 'https://note.com/ripe_spirea6186/n/n57eeaa0e743f',
                imgUrl: 'https://assets.st-note.com/production/uploads/images/133614275/picture_pc_1ab7ecfe914b4fbfa9ba6be59a68e64e.png'
            }
        ],
        '富山': [
            { title: 'Geminiの計画通りの旅行してきた！！福井旅行！！', url: 'https://note.com/ripe_spirea6186/n/n9f2e53a2800b', imgUrl: 'https://assets.st-note.com/img/1710928740-r6Q10Z8bX4.jpg' },
            { title: '急な変更でも、旅行の計画を一瞬で立て直すGemini活用術！！🛫', url: 'https://note.com/ripe_spirea6186/n/nfcb92a360f0a', imgUrl: 'https://assets.st-note.com/production/uploads/images/133614275/picture_pc_1ab7ecfe914b4fbfa9ba6be59a68e64e.png' },
            { title: '行きたいところが多すぎる旅行の計画をGeminiが代わりに立ててくれる。', url: 'https://note.com/ripe_spirea6186/n/n2a70c657c63d', imgUrl: 'https://assets.st-note.com/img/1710419992-H8v2G1yP7J.jpg' }
        ],
        '石川': [
            { title: 'Geminiの計画通りの旅行してきた！！福井旅行！！', url: 'https://note.com/ripe_spirea6186/n/n9f2e53a2800b', imgUrl: 'https://assets.st-note.com/img/1710928740-r6Q10Z8bX4.jpg' },
            { title: '急な変更でも、旅行の計画を一瞬で立て直すGemini活用術！！🛫', url: 'https://note.com/ripe_spirea6186/n/nfcb92a360f0a', imgUrl: 'https://assets.st-note.com/production/uploads/images/133614275/picture_pc_1ab7ecfe914b4fbfa9ba6be59a68e64e.png' },
            { title: '行きたいところが多すぎる旅行の計画をGeminiが代わりに立ててくれる。', url: 'https://note.com/ripe_spirea6186/n/n2a70c657c63d', imgUrl: 'https://assets.st-note.com/img/1710419992-H8v2G1yP7J.jpg' }
        ],
        '福井': [
            { title: 'Geminiの計画通りの旅行してきた！！福井旅行！！', url: 'https://note.com/ripe_spirea6186/n/n9f2e53a2800b', imgUrl: 'https://assets.st-note.com/img/1710928740-r6Q10Z8bX4.jpg' },
            { title: '急な変更でも、旅行の計画を一瞬で立て直すGemini活用術！！🛫', url: 'https://note.com/ripe_spirea6186/n/nfcb92a360f0a', imgUrl: 'https://assets.st-note.com/production/uploads/images/133614275/picture_pc_1ab7ecfe914b4fbfa9ba6be59a68e64e.png' },
            { title: '行きたいところが多すぎる旅行の計画をGeminiが代わりに立ててくれる。', url: 'https://note.com/ripe_spirea6186/n/n2a70c657c63d', imgUrl: 'https://assets.st-note.com/img/1710419992-H8v2G1yP7J.jpg' }
        ],
        '静岡': [
            {
                title: '星野リゾート「界 アンジン」に界タビ20sで19000円で泊まってきた😃',
                url: 'https://note.com/ripe_spirea6186/n/n356bb3665137',
                imgUrl: 'https://assets.st-note.com/production/uploads/images/133614275/picture_pc_1ab7ecfe914b4fbfa9ba6be59a68e64e.png'
            }
        ],
        '長崎': [
            {
                title: '長崎旅行に行ってきました!!!!',
                url: 'https://note.com/ripe_spirea6186/n/n728bf185680f',
                imgUrl: 'https://assets.st-note.com/img/1726058869-d9R3G2yP8T.png'
            }
        ],
        '神奈川': [
            {
                title: '【Gemini賞受賞🏆】食べるものしか決まってない鎌倉旅行の観光プランをGeminiが考えてくれた！',
                url: 'https://note.com/ripe_spirea6186/n/n0808cb4fd16c',
                imgUrl: 'https://assets.st-note.com/production/uploads/images/133614275/picture_pc_1ab7ecfe914b4fbfa9ba6be59a68e64e.png'
            }
        ]
    };

    // Prefecture Coordinates on a 16x16 Grid
    // [name, col, row, col_span, row_span]
    const prefectures = [
        ['北海道', 14, 1, 2, 2],
        ['青森', 14, 3],
        ['岩手', 14, 4],
        ['秋田', 13, 4],
        ['宮城', 14, 5],
        ['山形', 13, 5],
        ['福島', 14, 6],
        ['茨城', 15, 7],
        ['栃木', 14, 7],
        ['群馬', 13, 7],
        ['埼玉', 14, 8],
        ['千葉', 15, 8],
        ['東京', 14, 9],
        ['神奈川', 14, 10],
        ['新潟', 13, 6],
        ['富山', 11, 6],
        ['石川', 10, 6],
        ['福井', 10, 7],
        ['山梨', 13, 8],
        ['長野', 12, 7],
        ['岐阜', 11, 7],
        ['静岡', 13, 9],
        ['愛知', 12, 8],
        ['三重', 11, 8],
        ['滋賀', 10, 8],
        ['京都', 9, 8],
        ['大阪', 9, 9],
        ['兵庫', 8, 8],
        ['奈良', 10, 9],
        ['和歌山', 9, 10],
        ['鳥取', 7, 7],
        ['島根', 6, 7],
        ['岡山', 7, 8],
        ['広島', 6, 8],
        ['山口', 5, 8],
        ['徳島', 8, 10],
        ['香川', 7, 10],
        ['愛媛', 6, 10],
        ['高知', 7, 11],
        ['福岡', 4, 9],
        ['佐賀', 3, 9],
        ['長崎', 3, 10],
        ['熊本', 4, 10],
        ['大分', 5, 10], // Adjusted position to fit Kyushu slightly better
        ['宮崎', 5, 11],
        ['鹿児島', 4, 11],
        ['沖縄', 1, 14, 2, 2],
    ];

    const mapContainer = document.getElementById('japan-map');
    const modal = document.getElementById('article-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-pref-name');
    const modalList = document.getElementById('modal-article-list');

    // Build the Map
    prefectures.forEach(pref => {
        const [name, col, row, colSpan = 1, rowSpan = 1] = pref;
        const isVisited = !unvisited.includes(name);

        const block = document.createElement('div');
        block.classList.add('pref-block');
        if (isVisited) block.classList.add('visited');
        if (name === '北海道') block.classList.add('hokkaido');
        else if (name === '沖縄') block.classList.add('okinawa');
        else {
            block.style.gridColumn = col;
            block.style.gridRow = row;
        }

        block.textContent = name.substring(0, 1); // Display first char for space
        if (name === '北海道' || name === '沖縄' || name === '神奈川' || name === '和歌山') {
             block.textContent = name; // exceptions
        }
        
        block.title = name; // Tooltip on hover

        if (isVisited) {
            block.addEventListener('click', () => {
                openModal(name);
            });
        }

        mapContainer.appendChild(block);
    });

    // Modal Logic
    function openModal(prefName) {
        modalTitle.textContent = prefName;
        modalList.innerHTML = ''; // Clear previous

        const articles = articlesMap[prefName];
        
        if (articles && articles.length > 0) {
            const listContainer = document.createElement('div');
            listContainer.className = 'article-card-list';
            
            articles.forEach(article => {
                const articleCard = document.createElement('a');
                articleCard.href = article.url;
                articleCard.target = '_blank';
                articleCard.className = 'article-card';
                
                // If we don't have a real thumb, we can fetch note's generic OG image or the specific ones later.
                // For now, using a placeholder image logic that tries to load the specified thumbnail.
                const fallbackImg = 'https://assets.st-note.com/production/uploads/images/133614275/picture_pc_1ab7ecfe914b4fbfa9ba6be59a68e64e.png'; // Fallback
                
                articleCard.innerHTML = `
                    <div class="article-thumb" style="background-image: url('${article.imgUrl || fallbackImg}');"></div>
                    <div class="article-info">
                        <h4>${article.title}</h4>
                        <span class="read-more">記事を読む <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                `;
                
                listContainer.appendChild(articleCard);
            });
            modalList.appendChild(listContainer);
        } else {
            const p = document.createElement('p');
            p.className = 'dummy-text';
            p.innerHTML = '<i class="fa-solid fa-person-digging"></i> 記事を準備中！';
            modalList.appendChild(p);
        }

        modal.classList.add('show');
    }

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

});
