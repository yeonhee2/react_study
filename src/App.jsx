import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';

function App() {
 //  const[변수명, 변경함수] = useState(초기값); 선언하는 방법
 // useXXX : 리엑트 내장함수 ( 리엑트 훅 )
  const [title, setTitle] = useState('상품목록'); 
  const [boardTitle, setBoardTitle] = useState(['React','HTML', 'CSS']);
  const [like, setLike] = useState([0,0,0]);
  const [show, setShow] = useState(false);
  // 몇번째 게시글을 클릭한지 저장
  const [titleIndex, setTitleIndex] = useState(0);

  function change() {
    setLike(like + 1);
  }

  console.log(onclick);
  return (
    <div className='App'>
      <div className='nav'>
        <h3>{title}</h3>
      </div>
      <button onClick={() => {
        setTitle('게시판')
      }}>제목바꾸기</button>

      {
        boardTitle.map((title, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setShow(!show)
                setTitleIndex(i);
              }}>{title} <button onClick={(e) => {
                // 버블링때문에 안걸리게 하는걸 안 하면 부모이벤트꺼까지 같이 나옴
                e.stopPropagation();
                let _like = [...like];
                _like[i] = _like[i]+1;
                setLike(_like);
              }}>좋아요</button> {like[i]} </h4>
              <p>2025-07-16</p>
           </div>     
          )
        })
      }

      <button onClick={ () => {
        // setBoardTitle(['Java','HTML', 'CSS']);
        // 배열이나 오브젝트형식으로 있으면 
        // 먼저 [... 해당 변수명]을 붙여서 하면 주소값이 변경됨 그 후에 값을 변경
        let _boardTitle = [...boardTitle];
        _boardTitle[0] = 'Java';
        setBoardTitle(_boardTitle);
      }}>첫번째 게시물 제목바꾸기</button>
      {/* 꼭 자동완성해야함 import가 생성되어야함 */}

      {
        show ? <Detail boardTitle = {boardTitle} setBoardTitle={setBoardTitle} titleIndex = {titleIndex} /> : ''
        // show && <Detail /> 
      }
      

    </div>
  )
}

export default App
