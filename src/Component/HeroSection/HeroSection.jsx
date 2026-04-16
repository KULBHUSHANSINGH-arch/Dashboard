import React from 'react'
import './HeroSection.css'
import Event from '../Event/Event'
import video from '../../assets/icons/video.png';
import draft from '../../assets/icons/draft.png';
import active from '../../assets/icons/active.png';
import bar from '../../assets/icons/bar.png';
import image1 from '../../assets/icons/image1.jpg';
import image2 from '../../assets/icons/image2.png';
import image3 from '../../assets/icons/image3.jpg';
import add from '../../assets/icons/plus.png';

/* ---- Stat Cards ---- */
const statCards = [
    {
        label: "Today's Meeting",
        value: 12,
        color: '#28a745',
        icon: <img src={video} alt="today-meeting" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />,
    },
    {
        label: "Today's Task",
        value: 12,
        color: '#7c3aed',
        icon: <img src={draft} alt="today-task" style={{ width: '56px', height: '56px', objectFit: 'contain' }} />,
    },
    {
        label: 'Total Pending Task',
        value: 12,
        color: '#fc7317',
        icon: <img src={draft} alt="today-pending-task" style={{ width: '56px', height: '56px', objectFit: 'contain', color: '#fc7317' }} />,
    },
    {
        label: "Today's Meeting",
        value: 12,
        color: '#e53935',
        icon: <img src={draft} alt="today-meeting" style={{ width: '56px', height: '56px', objectFit: 'contain' }} />,
    },
]

/* ---- To Do List ---- */
const todoItems = [
    { title: 'Design Task Management ...', sub: 'Task Management  •  By : Deepa Ma\'am', badge: 'Daily', starred: true },
    { title: 'Design Wire frame', sub: 'Task Management  •  By : Gourav sir', badge: 'Weekly', starred: false },
    { title: 'Scope Document', sub: 'Task Management  •  By : Gourav sir', badge: 'Monthly', starred: false },
    { title: 'Document Creation', sub: 'Task Management  •  By : Gourav sir', badge: 'Yearly', starred: false },
]

const badgeClass = { Daily: 'badge-daily', Weekly: 'badge-weekly', Monthly: 'badge-monthly', Yearly: 'badge-yearly' }

/* ---- Meetings ---- */
const meetings = [
    { title: 'Team Stand-up Meeting', time: '09:15 AM - 09:15 AM', duration: '70 min' },
    { title: 'Discussion with Client', time: '10:30 PM - 11:15 AM', duration: '70 min' },
    { title: 'Interview Front end Developer', time: '11:30 AM - 01:00 PM', duration: '70 min' },
]

/* ---- Ongoing Projects ---- */
const ongoingProjects = [
    {
        title: 'Update Employee Contact ..',
        desc: 'Ensure all employee contact details are up-to-date in the ESS portal. This includes phone numbers..',
        time: '09:30 PM - 10:00 AM',
        progress: 62,
        status: 'Progress',
        tasks: 12,
        activities: 86,
    },
    {
        title: 'Approve Leave Requests',
        desc: 'Review and approve pending leave applications submitted via the ESS portal. Ensure leave...',
        time: '09:30 PM - 10:00 AM',
        progress: 100,
        status: 'Complete',
        tasks: 12,
        activities: 86,
    },
    {
        title: 'Generate Monthly Attendance Report',
        desc: 'Compile and generate the monthly attendance report for all employees...',
        time: '10:00 AM - 11:00 AM',
        progress: 45,
        status: 'Progress',
        tasks: 8,
        activities: 54,
    },
]

/* ---- Tasks in Review ---- */
const tasksInReview = [
    { title: 'Design Task Management ...', sub: 'Submitted: Yesterday  →  To : Deepa Ma\'am', status: 'Submitted' },
    { title: 'Design Wire frame', sub: 'Submitted: Yesterday  →  To : Gourav sir', status: 'Submitted' },
    { title: 'Scope Document', sub: 'Submitted: Yesterday  →  To : Gourav sir', status: 'Submitted' },
    { title: 'Document Creation', sub: 'Submitted: Yesterday  →  To : Gourav sir', status: 'Submitted' },
    { title: 'User Experience Research', sub: 'Submitted: Today  →  To : Deepa Ma\'am', status: 'In Review' },
    { title: 'Prototype Development', sub: 'Submitted: Today  →  To : Aditya sir', status: 'In Review' },
    { title: 'Usability Testing Report', sub: 'Submitted: Today  →  To : Deepa Ma\'am', status: 'In Review' },
    { title: 'Design System Documentation', sub: 'Submitted: Today  →  To : Deepa Ma\'am', status: 'In Review' },
]

const HeroSection = () => {
    return (
        <div className="heroWrapper">
            {/* Greeting */}
            <div className="greetingRow">
                <h4 className="greeting-text">Hello Kulbhushan Singh,</h4>
                <button className="create-btn">
                    Create
                    <img src={add} alt="add-icon" />
                </button>
            </div>

            <div className="heroBody">
                {/* -------- LEFT: Main Content -------- */}
                <div className="mainContent">
                    {/* Stat Cards */}
                    <div className="statCardsRow">
                        {statCards.map((card, i) => (
                            <div className="statCard" key={i}>
                                <div className="statCard-icon-wrap" style={{ background: card.color + '15' }}>
                                    {card.icon}
                                </div>
                                <p className="statCard-label">{card.label}</p>
                                <p className="statCard-value" style={{ color: card.color }}>{card.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* ToDo & Meeting Row */}
                    <div className="twoColRow">
                        {/* To Do List */}
                        <div className="card">
                            <div className="section-header">
                                <h6 className="section-title">
                                    <span className="title-bar"></span>
                                    To Do List
                                </h6>
                                <div className="section-actions">
                                    <div className="dropdown-pill">
                                        Today
                                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                    <button className="add-btn">
                                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <line x1="12" y1="5" x2="12" y2="19" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="todo-list">
                                {todoItems.map((item, i) => (
                                    <div className="todo-item" key={i}>
                                        <button className="star-btn">
                                            <svg width="16" height="16" fill={item.starred ? '#ffc107' : 'none'} stroke={item.starred ? '#ffc107' : '#b0b8cc'} strokeWidth="2" viewBox="0 0 24 24">
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        </button>
                                        <div className="todo-info">
                                            <p className="todo-title">{item.title}</p>
                                            <p className="todo-sub">{item.sub}</p>
                                        </div>
                                        <span className={`badge ${badgeClass[item.badge]}`}>{item.badge}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Meeting */}
                        <div className="card">
                            <div className="section-header">
                                <h6 className="section-title">
                                    <span className="title-bar"></span>
                                    Meeting
                                </h6>
                                <div className="section-actions">
                                    <div className="dropdown-pill">
                                        Today
                                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                    <button className="add-btn">
                                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <line x1="12" y1="5" x2="12" y2="19" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="meeting-list">
                                {meetings.map((m, i) => (
                                    <div className="meeting-item" key={i}>
                                        <div className="meeting-info">
                                            <p className="meeting-title">{m.title}</p>
                                            <p className="meeting-time">
                                                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12 6 12 12 16 14" />
                                                </svg>
                                                {m.time}
                                            </p>
                                        </div>
                                        <div className="meeting-duration">
                                            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            {m.duration}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Ongoing Projects & Tasks in Review Row */}
                    <div className="twoColRow">
                        {/* Ongoing Projects */}
                        <div className="card">
                            <div className="section-header">
                                <h6 className="section-title">
                                    <span className="title-bar"></span>
                                    Ongoing Projects
                                </h6>
                            </div>
                            <div className="project-list">
                                {ongoingProjects.map((proj, i) => (
                                    <div className="project-item" key={i}>
                                        <p className="project-title">{proj.title}</p>
                                        <p className="project-desc">{proj.desc}</p>
                                        <div className="project-time">
                                            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            {proj.time}
                                        </div>
                                        <div className="progress-row">
                                            <span className={`progress-status ${proj.status === 'Complete' ? 'complete' : ''}`}>
                                                {proj.status}
                                            </span>
                                            <span className="progress-pct">{proj.progress}%</span>
                                        </div>
                                        <div className="progress-bar-track">
                                            <div
                                                className="progress-bar-fill"
                                                style={{
                                                    width: `${proj.progress}%`,
                                                    background: proj.progress === 100 ? '#28a745' : '#1a73e8',
                                                }}
                                            ></div>
                                        </div>
                                        <div className="project-meta ">
                                            <div className="avatar-stack">
                                                <img src={image2} alt="image2-icon" />
                                                <img src={image1} alt="image1-icon" />
                                                <img src={image3} alt="image3-icon" />

                                            </div>
                                            <div className='d-flex gap-2'>
                                                <span className="meta-text ">
                                                    <img src={active} alt="active-icon" />
                                                    {proj.tasks} tasks
                                                </span>
                                                <span className="meta-text">
                                                    <img src={bar} alt="bar-icon" />
                                                    {proj.activities} Activities
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tasks in Review */}
                        <div className="card">
                            <div className="section-header">
                                <h6 className="section-title">
                                    <span className="title-bar"></span>
                                    Tasks in Review
                                </h6>
                            </div>
                            <div className="review-list">
                                {tasksInReview.map((task, i) => (
                                    <div className="review-item" key={i}>
                                        <div className="review-info">
                                            <p className="review-title">{task.title}</p>
                                            <p className="review-sub">{task.sub}</p>
                                        </div>
                                        <span className={`status-chip ${task.status === 'Submitted' ? 'chip-submitted' : 'chip-inreview'}`}>
                                            {task.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------- RIGHT: Event Column -------- */}
                <div className="eventSection">
                    <Event />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
