const FRA_STATS = {
    pounds:        { display: '8,992',   count: 8992  },
    dollars:       { display: '32,851', count: 32851 },
    volunteers:    { display: '200',     count: 200    },
    organizations: { display: '75',     count: 75    },
    leaders:    { display: '16',     count: 16    },
    schools:    { display: '3',     count: 3    },
    events:    { display: '20',     count: 20  },
    reached:    { display: '75', count: 75  },
    percent:    { display: '10', count: 10  },
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
