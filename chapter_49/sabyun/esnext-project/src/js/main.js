// 파일명: main.js
// 작성일: 2024-11-23

// DOM이 로드된 후 실행되도록 전체 코드를 감싸기
import '../css/style.css';
document.addEventListener('DOMContentLoaded', () => {
    class TodoApp {
        // private 필드 선언
        #tasks = new Map();
        #currentId = 1;

        constructor(containerId) {
            this.container = document.getElementById(containerId);
            if (!this.container) {
                throw new Error(`Element with id '${containerId}' not found`);
            }
            this.handleSubmit = this.handleSubmit.bind(this);
            this.init();
        }

        init() {
            const template = `
                <div class="todo-app">
                    <h1>할 일 목록</h1>
                    <form id="todoForm">
                        <input type="text" id="taskInput" placeholder="할 일을 입력하세요" required>
                        <button type="submit">추가</button>
                    </form>
                    <div class="task-filters">
                        <button data-filter="all">전체</button>
                        <button data-filter="active">진행중</button>
                        <button data-filter="completed">완료</button>
                    </div>
                    <ul id="taskList"></ul>
                    <div class="task-stats">
                        <span>총 할일: <span id="totalTasks">0</span></span>
                        <span>완료: <span id="completedTasks">0</span></span>
                    </div>
                </div>
            `;

            this.container.innerHTML = template;

            // 이벤트 리스너 등록
            document.getElementById('todoForm').addEventListener('submit', this.handleSubmit);
            
            document.querySelectorAll('.task-filters button').forEach(button => {
                button.addEventListener('click', () => this.filterTasks(button.dataset.filter));
            });
        }

        async handleSubmit(event) {
            event.preventDefault();
            const input = document.getElementById('taskInput');
            const taskText = input.value.trim();

            if (taskText) {
                try {
                    await this.addTask(taskText);
                    input.value = '';
                    this.updateStats();
                } catch (error) {
                    console.error(`할일 추가 중 에러 발생: ${error.message}`);
                }
            }
        }

        addTask(text) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const task = {
                        id: this.#currentId++,
                        text,
                        completed: false,
                        createdAt: new Date()
                    };

                    this.#tasks.set(task.id, task);
                    this.renderTask(task);
                    resolve(task);
                }, 500);
            });
        }

        renderTask(task) {
            const taskList = document.getElementById('taskList');
            const li = document.createElement('li');
            
            const { id, text, completed } = task;

            li.setAttribute('data-id', id); // ID 속성 추가

            li.innerHTML = `
                <input type="checkbox" ${completed ? 'checked' : ''}>
                <span class="task-text ${completed ? 'completed' : ''}">${text}</span>
                <button class="delete-btn">삭제</button>
            `;

            li.addEventListener('change', ({ target }) => {
                if (target.type === 'checkbox') {
                    this.toggleTask(id);
                }
            });

            li.querySelector('.delete-btn').addEventListener('click', () => {
                this.deleteTask(id);
            });

            taskList.appendChild(li);
        }

        toggleTask(id) {
            const task = this.#tasks.get(id);
            if (task) {
                task.completed = !task.completed;
                this.updateStats();
                // DOM 요소 업데이트
                const taskElement = document.querySelector(`li[data-id="${id}"]`);
                if (taskElement) {
                    const textElement = taskElement.querySelector('.task-text');
                    textElement.classList.toggle('completed', task.completed);
                }
            }
        }

        deleteTask(id) {
            if (this.#tasks.delete(id)) {
                const taskElement = document.querySelector(`li[data-id="${id}"]`);
                if (taskElement) {
                    taskElement.remove();
                    this.updateStats();
                }
            }
        }

        filterTasks(filter) {
            const taskElements = document.querySelectorAll('#taskList li');
            
            for (const element of taskElements) {
                const taskId = Number(element.dataset.id);
                const task = this.#tasks.get(taskId);

                if (!task) continue;

                switch (filter) {
                    case 'all':
                        element.style.display = '';
                        break;
                    case 'active':
                        element.style.display = !task.completed ? '' : 'none';
                        break;
                    case 'completed':
                        element.style.display = task.completed ? '' : 'none';
                        break;
                }
            }
        }

        updateStats() {
            const completedCount = [...this.#tasks.values()].filter(task => task.completed).length;
            const totalCount = this.#tasks.size;

            document.getElementById('totalTasks').textContent = totalCount;
            document.getElementById('completedTasks').textContent = completedCount;
        }
    }

    // 앱 인스턴스 생성
    new TodoApp('todolist');
});