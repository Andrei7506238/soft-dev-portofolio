import { todos } from '../../data/todos'

export function TodoSection() {
  return (
    <section className="section todo-section" id="todo" aria-labelledby="todo-title">
      <div className="section-header">
        <h2 id="todo-title">Future Roadmap</h2>
        <p className="section-subtitle">Short-term plans and upcoming work.</p>
      </div>

      <ul className="todo-list">
        {todos.map((t) => (
          <li id={t.title} className="todo-item">
            <div className="todo-main">
              <strong className="todo-title">{t.title}</strong>
              {t.description && <p className="todo-desc">{t.description}</p>}
            </div>

            <div className="todo-meta">
              {t.eta && <span className="todo-eta">{t.eta}</span>}
              <span className={`todo-status ${t.status}`}>{t.status === 'in-progress' ? 'In progress' : t.status === 'done' ? 'Done' : 'Planned'}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TodoSection
