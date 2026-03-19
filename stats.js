const FRA_STATS = {
    pounds:        { display: '7,200',   count: 7200  },
    dollars:       { display: '$25,000', count: 25000 },
    volunteers:    { display: '200',     count: 200    },
    organizations: { display: '75',     count: 75    },
    leaders:    { display: '16',     count: 16    },
    schools:    { display: '3',     count: 3    },
    events:    { display: '20',     count: 10  },
    reached:    { display: '75', count: 75  },
    percent:    { display: '10', count: 10  }
};

document.querySelectorAll('[data-stat]').forEach(el => {
    const key = el.getAttribute('data-stat');
    if (FRA_STATS[key]) {
        el.setAttribute('data-target', FRA_STATS[key].count);
        el.setAttribute('data-display', FRA_STATS[key].display);
        el.textContent = FRA_STATS[key].display;
    }
});
