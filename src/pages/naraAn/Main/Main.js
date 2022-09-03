import React, { useState } from 'react';
import './Main.scss';

function Main() {
  const [container, setContainer] = useState([]);
  const [comment, setComment] = useState('');
  const commentId = 'nariiiii';

  function getValue(event) {
    event.preventDefault();
    setComment(event.target.value);
  }

  function addComment(e) {
    e.preventDefault();
    setContainer([...container, comment]);
    setComment('');
  }

  return (
    <>
      <nav className="nav">
        <div className="nav_logoAndTitle">
          <i className="fa-brands fa-instagram" />
          <span className="title">Westagram</span>
        </div>
        <form className="nav_search">
          <input type="text" className="input_style" />
          <i className="fa-solid fa-magnifying-glass search-icon"> 검색</i>
        </form>
        <ul className="nav_icons">
          <li>
            <button>
              <i className="fa-regular fa-compass" />
            </button>
          </li>
          <li>
            <button>
              <i className="fa-regular fa-heart" />
            </button>
          </li>
          <li>
            <button>
              <i className="fa-regular fa-user" />
            </button>
          </li>
        </ul>
      </nav>
      <main>
        <div className="feeds">
          <article>
            <header className="feeds_header">
              <div className="user_data">
                <img
                  className="user_img"
                  alt="character"
                  src="../../../../images/naraAn/tomung.jpeg"
                />
                <span className="user_name">nariiiii</span>
              </div>
              <button>
                <i className="fa-solid fa-ellipsis" />
              </button>
            </header>
            <div className="feeds_main">
              <span className="main_img">
                <img
                  alt="waikiki beach"
                  src="../../../../images/naraAn/waikiki.jpeg"
                />
              </span>
              <div className="feed_contents">
                <ul className="feed_icons">
                  <li>
                    <button>
                      <i className="fa-regular fa-heart" />
                    </button>
                    <button>
                      <i className="fa-regular fa-comment" />
                    </button>
                    <button>
                      <i className="fa-regular fa-paper-plane" />
                    </button>
                  </li>
                  <li>
                    <button>
                      <i className="fa-regular fa-bookmark" />
                    </button>
                  </li>
                </ul>
                <div className="feed_likes">
                  <img
                    className="user_img"
                    alt="minions"
                    src="../../../../images/naraAn/minions.jpg"
                  />
                  <span className="user_name">minions</span>
                  <span>님 외 10명이 좋아합니다</span>
                </div>
                <ul className="feed_text">
                  <li>
                    <span className="user_name">nariiiii</span>
                    <span className="comment_style">여행가고 싶다 🥲</span>
                  </li>
                  <li>
                    <button>더보기</button>
                  </li>
                </ul>
                <ul>
                  {container.map(value => {
                    return (
                      <li>
                        <span className="user_name">{commentId}</span>
                        <span className="comment_style">{value}</span>
                      </li>
                    );
                  })}
                </ul>

                <p>42분 전</p>
              </div>
            </div>
            <footer>
              <form onSubmit={addComment} id="comment_write">
                <input
                  value={comment}
                  onChange={getValue}
                  type="text"
                  className="comment_input"
                  placeholder="댓글달기..."
                />
                <input id="comment_btn" type="submit" value="게시" />
              </form>
            </footer>
          </article>
        </div>
        <div className="main_right">
          <header className="main_right_title">
            <img
              className="user_img"
              alt="duck"
              src="../../../../images/naraAn/duck.jpg"
            />
            <ul>
              <li id="user_wecode" className="user_name">
                wecode_37th
              </li>
              <li>
                <p>wecode | 위코드</p>
              </li>
            </ul>
          </header>
          <div className="main_right_story">
            <div className="story_title">
              <p>스토리</p>
              <button>모두보기</button>
            </div>
            <div className="story_user">
              <img
                alt="minions"
                src="../../../../images/naraAn/minions.jpg"
                className="user_img"
              />
              <div className="user_data">
                <span className="user_name">minions</span>
                <p className="time">10분 전</p>
              </div>
            </div>
            <div className="story_user">
              <img
                alt="minions"
                src="../../../../images/naraAn/minions.jpg"
                className="user_img"
              />
              <div className="user_data">
                <span className="user_name">minions</span>
                <p className="time">10분 전</p>
              </div>
            </div>
            <div className="story_user">
              <img
                alt="minions"
                src="../../../../images/naraAn/minions.jpg"
                className="user_img"
              />
              <div className="user_data">
                <span className="user_name">minions</span>
                <p className="time">10분 전</p>
              </div>
            </div>
            <div className="story_user">
              <img
                alt="minions"
                src="../../../../images/naraAn/minions.jpg"
                className="user_img"
              />
              <div className="user_data">
                <span className="user_name">minions</span>
                <p className="time">10분 전</p>
              </div>
            </div>
          </div>
          <div className="main_right_recommend">
            <div className="recommend_title">
              <p>회원님을 위한 추천</p>
              <button>모두보기</button>
            </div>
            <ul className="recommend_user">
              <li>
                <img
                  alt="minions"
                  src="../../../../images/naraAn/minions.jpg"
                  className="user_img"
                />
              </li>
              <li className="user_data">
                <span className="user_name">minions</span>
                <p>_juhyunii님 외 2명이...</p>
              </li>
              <li>
                <button>팔로우</button>
              </li>
            </ul>
            <ul className="recommend_user">
              <li>
                <img
                  alt="minions"
                  src="../../../../images/naraAn/minions.jpg"
                  className="user_img"
                />
              </li>
              <li className="user_data">
                <span className="user_name">minions</span>
                <p>_juhyunii님 외 2명이...</p>
              </li>
              <li>
                <button>팔로우</button>
              </li>
            </ul>
            <ul className="recommend_user">
              <li>
                <img
                  alt="minions"
                  src="../../../../images/naraAn/minions.jpg"
                  className="user_img"
                />
              </li>
              <li className="user_data">
                <span className="user_name">minions</span>
                <p>_juhyunii님 외 2명이...</p>
              </li>
              <li>
                <button>팔로우</button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
