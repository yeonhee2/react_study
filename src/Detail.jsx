function Detail({ boardTitle, setBoardTitle, titleIndex }) {
  // const boardTitle = props.boardTitle;
  return (
    <div className="detail">
      <button onClick={ () => {
        let _boardTitle = [...boardTitle];
        _boardTitle[0] = "ㅋㅋㅋㅋㅋ";
        setBoardTitle(_boardTitle);
      }}>제목바꿔주는 버튼</button>
      <h4>{boardTitle[titleIndex]}</h4>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}

// const Detail = () => {
//   return (
//     <>
//     </>
//   )
// }

export default Detail;