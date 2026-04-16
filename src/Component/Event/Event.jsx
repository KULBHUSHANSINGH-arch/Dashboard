import React, { useState } from 'react'
import celebration from '../../assets/icons/celebration.png';

const upcomingEvents = [
    {
        startDate: '03',
        startMonth: 'July',
        title: 'Project Kickoff',
        description: 'The event details will come here in this line...',
        time: '12:00 PM',
        endDate: '05',
        endMonth: 'July',
    },
    {
        startDate: '10',
        startMonth: 'July',
        title: 'Team Review',
        description: 'Quarterly review meeting with the entire team...',
        time: '03:00 PM',
        endDate: '10',
        endMonth: 'July',
    },
]

const feedItems = [
    {
        date: 'Thursday, 26 Jun',
        items: [
            {
                id: 1,
                type: 'task',
                title: 'New Task Assigned',
                description: 'You have been assigned a new task by Ramesh pandey (Team Lead) in the...',
                meta: 'By : Ramesh Pandey | 12:32',
                unread: true,
            },
            {
                id: 2,
                type: 'task',
                title: 'New Task Assigned',
                description: 'You have been assigned a new task by Ramesh pandey (Team Lead) in the...',
                meta: 'By : Ramesh Pandey | 12:32',
                unread: true,
            },
            {
                id: 3,
                type: 'milestone',
                title: 'Travel management reached a Milestone',
                description: 'Agenda of the meeting will be come here and also share your thoughts on th...',
                meta: 'System generated | 12:32',
                hasImage: true,
                unread: false,
            },

        ],
    },
    {
        date: 'Wednesday, 25 Jun',
        items: [
            {
                id: 5,
                type: 'approved',
                title: 'Task Approved',
                description: 'Your AppXchange task has been approved.',
                meta: "By : Ramnee Ma'am | 14:27",
                unread: false,
            },
            {
                id: 6,
                type: 'project',
                title: 'You were added in a Project',
                description: 'You have been added in Task management Project',
                meta: 'By : Gourav sir | 14:27',
                unread: false,
            },
        ],
    },
    {
        date: 'Tuesday, 24 Jun',
        items: [
            {
                id: 7,
                type: 'approved',
                title: 'Task Approved',
                description: 'Your AppXchange task has been approved.',
                meta: "By : Ramnee Ma'am | 14:27",
                unread: false,
            },
        ],
    },
]

const styles = {
    EventColumnWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        height: '100%',
        fontFamily: "'Segoe UI', sans-serif",
    },
    UpcomingCardWrapper: {
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(30,42,59,0.07)',
        border: '1px solid #e4e8f0',
        overflow: 'hidden',
    },
    UpcomingHeaderContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 16px 10px',
    },
    UpcomingHeaderTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '13px',
        fontWeight: '600',
        color: '#1a73e8',
        margin: 0,
    },
    UpcomingHeaderTitleBar: {
        width: '3px',
        height: '14px',
        background: '#1a73e8',
        borderRadius: '2px',
        display: 'inline-block',
        flexShrink: 0,
    },
    UpcomingNavContainer: {
        display: 'flex',
        gap: '4px',
    },
    UpcomingBodyContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 16px 16px',
    },
    UpcomingStartDateContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#f4f6fb',
        borderRadius: '10px',
        padding: '8px 12px',
        minWidth: '48px',
    },
    UpcomingDateNumber: {
        fontSize: '22px',
        fontWeight: '700',
        color: '#1e2a3b',
        lineHeight: 1,
    },
    UpcomingDateMonth: {
        fontSize: '11px',
        color: '#7a8499',
        marginTop: '2px',
    },
    UpcomingTextContainer: {
        flex: 1,
    },
    UpcomingEventTitle: {
        fontSize: '13px',
        fontWeight: '600',
        color: '#1e2a3b',
        margin: '0 0 3px',
    },
    UpcomingEventDescription: {
        fontSize: '11px',
        color: '#7a8499',
        margin: '0 0 5px',
        lineHeight: '1.4',
    },
    UpcomingEventTime: {
        fontSize: '11px',
        color: '#7a8499',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        margin: 0,
    },
    UpcomingEndDateContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff8f0',
        borderRadius: '10px',
        padding: '8px 12px',
        minWidth: '48px',
    },
    UpcomingEndDateNumber: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#7a8499',
        lineHeight: 1,
    },
    UpcomingEndDateMonth: {
        fontSize: '11px',
        color: '#7a8499',
        marginTop: '2px',
    },
    FeedCardWrapper: {
        flex: 1,
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(30,42,59,0.07)',
        border: '1px solid #e4e8f0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(100vh - 10px)',
    },
    FeedHeaderContainer: {
        padding: '14px 16px 0',
    },
    FeedHeaderTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '13px',
        fontWeight: '600',
        color: '#1a73e8',
        margin: 0,
    },
    FeedHeaderTitleBar: {
        width: '3px',
        height: '14px',
        background: '#1a73e8',
        borderRadius: '2px',
        display: 'inline-block',
        flexShrink: 0,
    },
    FeedHeaderBadge: {
        background: '#e8f0fe',
        color: '#1a73e8',
        borderRadius: '10px',
        fontSize: '11px',
        fontWeight: '600',
        padding: '1px 7px',
        marginLeft: '4px',
    },
    FeedTabsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '10px 16px 8px',
        borderBottom: '1px solid #e4e8f0',
    },
    FeedMarkAllButton: {
        marginLeft: 'auto',
        background: 'none',
        border: 'none',
        color: '#1a73e8',
        fontSize: '11px',
        fontWeight: '500',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
    },
    FeedListContainer: {
        overflowY: 'auto',
        flex: 1,
        paddingBottom: '8px',
    },
    FeedDateLabel: {
        fontSize: '11px',
        color: '#b0b8cc',
        padding: '8px 16px 4px',
        textAlign: 'center',
    },
    FeedItemWrapper: {
        margin: '6px 10px',
        padding: '10px 12px',
        background: '#ffffff',
        border: '1px solid #e0e4ed',
        borderRadius: '10px',
    },



    FeedItemWrapperUnread: {
        margin: '6px 10px',
        padding: '10px 12px',
        background: '#f0f6ff',
        border: '1px solid #b8d4f8',
        borderRadius: '10px',
    },
    FeedItemHeaderRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '3px',
    },
    FeedItemTitle: {
        fontSize: '12px',
        fontWeight: '600',
        color: '#1e2a3b',
    },
    FeedItemUnreadChip: {
        background: '#e8f0fe',
        color: '#1a73e8',
        fontSize: '10px',
        fontWeight: '500',
        padding: '1px 7px',
        borderRadius: '10px',
    },
    FeedItemDescription: {
        fontSize: '11px',
        color: '#7a8499',
        margin: '0 0 3px',
        lineHeight: '1.4',
    },
    FeedItemMilestoneImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 0',

    },
    FeedItemMeta: {
        fontSize: '10px',
        color: '#b0b8cc',
        margin: 0,
    },
}

const NavButton = ({ onClick, disabled, children }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                border: '1px solid #e4e8f0',
                background: hovered && !disabled ? '#1a73e8' : '#f4f6fb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: disabled ? 'not-allowed' : 'pointer',
                color: hovered && !disabled ? '#ffffff' : '#7a8499',
                opacity: disabled ? 0.4 : 1,
                transition: 'all 0.2s',
                padding: 0,
            }}
        >
            {children}
        </button>
    )
}

const FeedTabButton = ({ active, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            style={{
                border: '1px solid #e4e8f0',
                background: active ? '#1e2a3b' : '#f4f6fb',
                color: active ? '#ffffff' : '#7a8499',
                borderColor: active ? '#1e2a3b' : '#e4e8f0',
                borderRadius: '7px',
                padding: '4px 12px',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s',
            }}
        >
            {children}
        </button>
    )
}

const Event = () => {
    const [currentEvent, setCurrentEvent] = useState(0)
    const [feedTab, setFeedTab] = useState('all')

    const prevEvent = () => setCurrentEvent((p) => Math.max(0, p - 1))
    const nextEvent = () => setCurrentEvent((p) => Math.min(upcomingEvents.length - 1, p + 1))

    const ev = upcomingEvents[currentEvent]
    const unreadCount = feedItems.flatMap((g) => g.items).filter((i) => i.unread).length

    return (
        <div style={styles.EventColumnWrapper}>

            {/* -------- Upcoming Events Card -------- */}
            <div style={styles.UpcomingCardWrapper}>
                <div style={styles.UpcomingHeaderContainer}>
                    <h6 style={styles.UpcomingHeaderTitle}>
                        <span style={styles.UpcomingHeaderTitleBar}></span>
                        Upcoming Events
                    </h6>
                    <div style={styles.UpcomingNavContainer}>
                        <NavButton onClick={prevEvent} disabled={currentEvent === 0}>
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </NavButton>
                        <NavButton onClick={nextEvent} disabled={currentEvent === upcomingEvents.length - 1}>
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </NavButton>
                    </div>
                </div>

                <div style={styles.UpcomingBodyContainer}>
                    <div style={styles.UpcomingStartDateContainer}>
                        <span style={styles.UpcomingDateNumber}>{ev.startDate}</span>
                        <span style={styles.UpcomingDateMonth}>{ev.startMonth}</span>
                    </div>

                    <div style={styles.UpcomingTextContainer}>
                        <p style={styles.UpcomingEventTitle}>{ev.title}</p>
                        <p style={styles.UpcomingEventDescription}>{ev.description}</p>
                        <p style={styles.UpcomingEventTime}>
                            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            {ev.time}
                        </p>
                    </div>

                    <div style={styles.UpcomingEndDateContainer}>
                        <span style={styles.UpcomingEndDateNumber}>{ev.endDate}</span>
                        <span style={styles.UpcomingEndDateMonth}>{ev.endMonth}</span>
                    </div>
                </div>
            </div>

            {/* -------- Feed Card -------- */}
            <div style={styles.FeedCardWrapper}>
                <div style={styles.FeedHeaderContainer}>
                    <h6 style={styles.FeedHeaderTitle}>
                        <span style={styles.FeedHeaderTitleBar}></span>
                        Feed
                        {unreadCount > 0 && <span style={styles.FeedHeaderBadge}>{unreadCount}</span>}
                    </h6>
                </div>

                <div style={styles.FeedTabsContainer}>
                    <FeedTabButton active={feedTab === 'all'} onClick={() => setFeedTab('all')}>
                        View All
                    </FeedTabButton>
                    <FeedTabButton active={feedTab === 'unread'} onClick={() => setFeedTab('unread')}>
                        Unread ({unreadCount})
                    </FeedTabButton>
                    <button style={styles.FeedMarkAllButton}>Mark all as read</button>
                </div>

                <div style={styles.FeedListContainer}>
                    {feedItems.map((group, gi) => {
                        const filteredItems = group.items.filter(
                            (item) => feedTab === 'all' || item.unread
                        )
                        if (filteredItems.length === 0) return null
                        return (
                            <div key={gi}>
                                <div style={styles.FeedDateLabel}>{group.date}</div>
                                {filteredItems.map((item) => (
                                    <div
                                        key={item.id}
                                        style={item.unread ? styles.FeedItemWrapperUnread : styles.FeedItemWrapper}
                                    >
                                        <div style={styles.FeedItemHeaderRow}>
                                            <span style={styles.FeedItemTitle}>{item.title}</span>
                                            {item.unread && <span style={styles.FeedItemUnreadChip}>Unread</span>}
                                        </div>
                                        <p style={styles.FeedItemDescription}>{item.description}</p>
                                        {item.hasImage && (
                                            <div style={styles.FeedItemMilestoneImage}>
                                                {/* <span style={{ fontSize: 28 }}>🎉</span> */}
                                                <img src={celebration} alt="celebration-icon" style={{ fontSize: 2, width: '60px' }} />
                                            </div>
                                        )}
                                        <p style={styles.FeedItemMeta}>{item.meta}</p>
                                    </div>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Event