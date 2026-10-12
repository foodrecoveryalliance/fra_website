const FRA_STATS = {
    pounds:        { display: '12,017',   count: 12017  },
    dollars:       { display: '45,972', count: 45972 },
    volunteers:    { display: '290',     count: 290    },
    organizations: { display: '75',     count: 75    },
    leaders:    { display: '16',     count: 16    },
    schools:    { display: '3',     count: 3    },
    events:    { display: '20',     count: 20  },
    reached:    { display: '75', count: 75  },
    partners:    { display: '23', count: 23  },
    percent:    { display: '15', count: 15  },
    goal:    { display: '80,000', count: 80000  }
};

document.querySelectorAll('[data-stat]').forEach(el => {
    const key = el.getAttribute('data-stat');
    if (FRA_STATS[key]) {
        el.setAttribute('data-target', FRA_STATS[key].count);
        el.setAttribute('data-display', FRA_STATS[key].display);
        el.textContent = FRA_STATS[key].display;
    }
});
