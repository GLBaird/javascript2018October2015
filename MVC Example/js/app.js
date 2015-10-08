var app = {

    init: function() {
        // launch application
        console.log("Application Initialising...");

        // load data and setup user interface
        this.dataController.loadData();
        this.ui.setupUI();

        // detect window closing and save data
        window.addEventListener("beforeunload", this.dataController.saveData);
    },

    ui: {
        setupUI: function() {
            console.log("Setting up user interface...");
        }
    },

    dataController: {

        people: [],

        addPerson: function(newPerson) {
            this.people.push(newPerson);
        },

        saveData: function() {
            if (typeof Storage !== "undefined") {
                localStorage.data = JSON.stringify( this.people );
                console.log("Data saved");
            } else {
                console.log("Local Storage Not Available!");
            }
        },

        loadData: function() {
            if (typeof  Storage !== "undefined" && localStorage.data) {
                this.people = JSON.parse( localStorage.data );
                console.log("Data loaded from Local Storage");
            } else {
                console.log("Local Storage or Data not available");
            }
        }
    }
};

app.init();
