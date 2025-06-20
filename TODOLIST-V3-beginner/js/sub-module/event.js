import elements from './dom.js';
import {addTodo, clearCompletedTodos, deleteTodo, filterTodos, getState, toggleTodo} from './state.js';
import {render} from './render.js';

// 모든 이벤트들을 등록해주는 함수 (비공개)
function bindEvents() {

  // DOM 디스트럭쳐링
  const {
    $filters,
    $clearCompletedBtn,
    $todoList,
    $todoInput,
    $todoForm,
  } = elements;

  // ======== 이벤트 리스너 설정 ========== //

  // 필터링 버튼 클릭 이벤트
  $filters.addEventListener('click', e => {
    if (!e.target.matches('button')) return;

    // 여기서 필터를 누르면 렌더링? 이런거 여기서 하지말고
    // 렌더링은 render 함수에게 맡겨라
    // 필터가 뭐가 눌러졌는지만 확인해서 상태값만 변경해라
    filterTodos(e.target.id);

  });

  // 완료된 할 일 목록 지우기 이벤트
  $clearCompletedBtn.addEventListener('click', e => {
    clearCompletedTodos();
  });

  // 새 할 일을 추가하는 이벤트
  $todoForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(111);
    const newTodoText = $todoInput.value.trim();

    // 실제로 상태 배열에 입력된 데이터 추가
    if (newTodoText) {
      addTodo(newTodoText);
    }

    // 입력창 비우기
    $todoInput.value = '';
    $todoInput.focus();
  });


  // 할 일 목록에서 특정 할 일을 삭제하는 이벤트
  //                     완료 체크하는 이벤트
  // 이벤트 위임 필요, ul에 이벤트를 걸어줌
  $todoList.addEventListener('click', e => {
    // 클릭한 휴지통 버튼에 연결 되어있는 li의 id를 확인
    const todoId = +e.target.closest('.todo-item').dataset.id;

    if (e.target.matches('.delete-button i')) { // 클릭한 대상이 delete 버튼의 후손 i면 코드 실행
      deleteTodo(todoId);
    } else if (e.target.matches('.todo-check')) { // 클릭한 대상이 체크박스면 실행
      toggleTodo(todoId);
    }
  });
}


// 앱을 시작하는 함수
export function start() {
  bindEvents();
  // 초기 렌더링
  render(getState());
}
