const prompt = require('prompt-sync')()
class Nokia3310 {
    menu() {
        console.log("Menu\n1. Phonebook\n2. Message\n3. Chat\n4. Call register\n5. Tones\n6. Settings\n7. " + 
        "Call Divert\n8. Games\n9. Calculator\n10. Reminder\n11. Clock\n12. Profiles\n13. SIM Services");

        const input = prompt("Enter your preferred option: ");
        switch (parseInt(input)) {
            case 1:
                this.phonebook();
                break;
            case 2:
                this.messages();
                break;
            case 3:
                this.chat();
                break;
            case 4:
                this.callRegister();
                break;
            case 5:
                this.tones();
                break;
            case 6:
                this.settings();
                break;
            case 7:
                this.callDivert();
            case 8:
                this.games();
                break;
            case 9:
                this.calculator();
                break;
            case 10:
                this.reminders();
                break;
            case 11:
                this.clock();
                break;
            case 12:
                this.profiles();
                break;
            case 13:
                this.simServices();
                break;
            default:
                console.log("Enter a valid number between 1 - 13");
                this.menu();

        }

    }

    phonebook() {
        console.log("phonebook\n1. Search\n2. Service Numbers\n3. Add Name\n4. Erase\n5. " + 
        "Edit\n5. Assign Tone\n6. Send Business Card\n7. Options\n9. Speed Dials\n10. Voice Tags");

        const input = prompt("Enter your preferred option: ");
        switch (parseInt(input)) {
            case 1:
                console.log("Search");
                break;
            case 2:
                console.log("Service Numbers");
                break;
            case 3:
                console.log("Add Name");
                break;
            case 4:
                console.log("Erase");
                break;
            case 5:
                console.log("Edit");
                break;
            case 6:
                console.log("Assign Tone");
                break;
            case 7:
                console.log("Send Business Card");
                break;
            case 8:
                this.options();
                break;
            case 9:
                console.log("Speed Dials");
                break;
            case 10:
                console.log("Voice Tags");
                break;
            default:
                console.log("Enter a valid number between 1 - 10: ");
                this.menu()
        }            

    }

    options() {
        console.log("Options\n1. Type Of View\n2. Memory Status");
        
        const input = prompt("Enter your preferred option: ");
        switch (parseInt(input)) {
            case 1:
                console.log("Type Of View");
                break;
            case 2:
                console.log("Memory Status");
                break;
            default:
                console.log("Enter a valid number between 1-2: ")
                this.phonebook();
        }

    }

    messages() {
        console.log("Messages\n1. Write Message\n2. Inbox\n3. Outbox\n4. Picture Messages\n5. " + 
        "templates\n6. Smileys\n7. Message Settings\n8. Info Service\n9. Voice Mailbox Number\n10. Service Command Editor");

        const input = prompt("Enter your preferred option: ");
        switch (parseInt(input)) {
            case 1:
                console.log("Write message");
                break;
            case 2:
                console.log("Inbox");
                break;
            case 3:
                console.log("Outbox");
                break;
            case 4:
                console.log("Picture Message");
                break;
            case 5:
                console.log("Templates");
                break;
            case 6:
                console.log("Smileys");
                break;
            case 7:
                this.messageSettings();
                break;
            case 8:
                console.log("Info Service");
                break;
            case 9:
                console.log("Voice Mailbox Service");
                break;
            case 10:
                console.log("Service Command Editor");
                break;
            default:
                console.log("Enter a valid number between 1-10: ");
                this.menu();
        }

    }

    messageSettings() {
        console.log("Message Settings\n1. Set 1\n2. Common");

        const input = prompt("Enter your preferred option: ");
        switch(parseInt(input)) {
            case 1:
                this.set1();
                break;
            case 2:
                this.common();
                break;
            default:
                console.log("Enter a valid number between 1-2: ")
        }
    }
    set1() {
        console.log("Set 1\n1. Message Centre Number\n2. Message Sent As\n3. Message Validity");

        const input = prompt("Enter your preferred option: ");
        switch(parseInt(input)) {
            case 1:
                console.log("Message Centre Number");
                break;
            case 2:
                console.log("Message Sent As");
                break;
            case 3:
                console.log("Message Validity");
                break;
            default:
                console.log("Enter a valid number between 1 - 3: ");
                this.messages();
        }

    }
    common() {
        console.log("Common\n1. Delivery Reports\n2. Reply via Same Centre\n3. Character Support");

        const input = prompt("Enter your preferred option: ");
        switch(parseInt(input)) {
            case 1:
                console.log("Delivery Reports");
                break;
            case 2:
                console.log("Reply via Same Centre");
                break;
            case 3:
                console.log("Character Support");
                break;
            default:
                console.log("Enter a valid number between 1-3: ");
                this.menu();
        }

    }

    chat() {
        console.log("Empty")
        this.menu();

    }

    callRegister() {
        console.log("Call Register\n1. Missed Calls\n2. Received Calls\n3. Dialed Calls\n4. Erase Recent Call List");

        const input = prompt("Enter your preferred option: ");
        switch(parseInt(input)) {
            case 1:
                console.log("Missed Calls");
                break;
            case 2:
                console.log("Received Calls");
                break;
            case 3:
                console.log("Dialed Calls");
                break;
            case 4:
                console.log("Erase Recent Call Lists");
                break;
            case 5:
                this.showCallDuration();
                break;
            case 6:
                this.ShowCallCosts();
                break;
            case 7:
                this.callCostSettngs();
                break;
            case 8:
                console.log("Prepaid Credit")
            default:
                console.log("Enter a valid number between 1-8");
                this.menu();
            
        }
        
    }

    showCallDuration() {
        console.log("Show Call Duration\n1. Last Call Duration\n2. All Calls' Duration\n3. Received Calls Duration\n4. " + 
        "Dialled Calls' Duration\n5. Clear Counters");

        const input = prompt("Enter your preferred option: ");

        switch(parseInt(input)) {
            case 1:
                console.log("Last Call Duration");
                break;
            case 2:
                console.log("All Calls' Duration");
                break;
            case 3:
                console.log("Received Calls' Duration");
                break;
            case 4:
                console.log("Dialled Calls Duration");
                break;
            case 5:
                console. log("Clear Timers");
                break;
            default:
                console.log("Enter a valid number between 1-5");
                this.callRegister();
        }

    }

    ShowCallCosts() {
        console.log("Show Call Cost\n1. Last Call  Cost\n2. All Calls Costs\n3. Clear Counters")

            const input = prompt("Enter your preferred: ");
            switch(parseInt(input)) {
                case 1:
                    console.log("Last Call Cost");
                    break;
                case 2:
                    console.log("All Calls' Cost");
                    break;
                case 3:
                    console.log("Clear Counters");
                    break;
                default:
                    console.log("Enter a valid number between 1-3: ");
                    this.callRegister();
            }
    
    }

    callCostSettngs() {
        console.log("callCostSettings\n1. Call Cost Setings\n2. Show Costs in");

        const input = prompt("Enter your preferred option: ");
        switch(parseInt(input)) {
            case 1:
                console.log("Call Cost Settings");
                break;
            case 2:
                console.log("Show Cost In");
                break;
            default:
                console.log("Enter a valid number between 1-2: ");
                this.callRegister();
        }
    }

    prepaidCredit() {
        console.log("Nothing to see here");
        this.menu();

    }

    tones() {
        console.log("Tones\n1. Ringing Tone\n2. Ringing Volume\n2. Ringing Volume\n3. Incoming Call Alert\n4. " + 
        "Composer\n5. Message Alert Tone\n6. Keypad Tones\n7. Warning And Game Tones\n8. Vibrating Alert\n9. Screen Saver");

            const input = prompt("Enter your preferred option: ");
            switch(parseInt(input)) {
                case 1:
                    console.log("Ringing Tone");
                    break;
                case 2:
                    console.log("Ringing Volume");
                    break;
                case 3:
                    console.log("Incoming Call Alert");
                    break;
                case 4:
                    console.log("Composer");
                    break;
                case 5:
                    console.log("Message Alert Tone");
                    break;
                case 6:
                    console.log("Keypad Tones");
                    break;
                case 7:
                    console.log("Warning Game Tone");
                    break;
                case 8:
                    console.log("Vibrating Alert");
                    break;
                case 9:
                    console.log("Screen Saver");
                    break;
                default:
                    console.log("Enter a valid number between 1-9:");
                    this.menu();
            }

    
    }

    settings() {
        console.log("Settings\n1. Call Settings\n2. Phone Settings\n3. Security Settings\n4. Restore Factory Settings");

        const input = prompt("Enter your preferred option: ");
        switch(parseInt(input)) {
            case 1:
                this.callSettings();
                break;
            case 2:
                this.phoneSettings();
                break;
            case 3:
                this.securitySettings();
                break;
            case 4:
                this.restoreFactorySettings();
                break;
            default:
                console.log("Enter a number between 1-4");
                this.menu();
        }

    }

    callSettings() {
        console.log("Call Settings\n1. Automatic Redial\n2. Speed Dialing\n3. Call Waiting Options\n4. " + 
        "Own Number Sending\n5. Phone Line In Use\n6. Automatic Answer");

        const input = prompt("Enter your preferred option: ");
        switch(parseInt(input)) {
            case 1:
                console.log("Automatic Redial");
                break;
            case 2:
                console.log("Speed Dialling");
                break;
            case 3:
                console.log("Call Waiting Options");
                break;
            case 4:
                console.log("Own Number Sending");
                break;
            case 5:
                console.log("Phone Line In Use");
                break;
            case 6:
                console.log("Automatic Answer");
                break;
            default:
                console.log("Enter a valid number between 1-4: ");
                this.settings();
        }
    }

    phoneSettings() {
        console.log("Phone Settings\n1. Language\n2. Cell Info Display\n3. Welcome Note\n4. " + 
        "Network Selection\n5. Lights\n6. Confirm SIM Service Actions");

        const input = prompt("Enter your preferred option: ");
        switch(parseInt(input)) {
            case 1:
                console.log("Language");
                break;
            case 2:
                console.log("Cell Info Display");
                break;
            case 3:
                console.log("Welcome Note");
                break;
            case 4:
                console.log("Network Selection");
                break;
            case 5:
                console.log("Lights");
                break;
            case 6:
                console.log("Confirm SIM Service Actions");
                break;
            default:
                console.log("Enter a valid number between 1-6: ");
                this.settings();
        }
    }

    securitySettings() {
        console.log("security Settings\n1. PIN Code Request\n2. Call Barring Service\n3. Fixed Dialling\n4. " + 
        "Closed User Group\n5. Phone Security\n6. Change Access Codes");

        const input = prompt("Enter your preferred: ");
        switch(parseInt(input)) {
            case 1:
                console.log("PIN Code Request");
                break;
            case 2:
                console.log("Call Barring Service");
                break;
            case 3:
                console.log("Fixed Dialling");
                break;
            case 4:
                console.log("Closed User Group");
                break;
            case 5:
                console.log("Phone Security");
                break;
            case 6:
                console.log("Change Access Codes");
                break;
            default:
                console.log("Enter a number between 1-6: ");
                this.settings();
        }
    }

    restoreFactorySettings() {
        console.log("Nothing to see here");
        this.settings();
    }

    callDivert() {
        console.log("No diverts");

    }

    games() {
        console.log("No games");
        this.menu();
    }

    calculator() {

    }

    reminders() {
        console.log("No reminders");
    }

    clock() {
        console.log("Clock\n1. Alarm Clock\n2. Clock Settings\n3. Date Settings\n4. " + 
        "Stopwatch\n5. Countdown Timer\n6. Auto Update Date And Time");

        const input = prompt("Enter your preferred option: ");
        switch(parseInt(input)) {
            case 1:
                console.log("Alarm Clock");
                break;
            case 2:
                console.log("Clock Settings");
                break;
            case 3:
                console.log("Date Settings");
                break;
            case 4:
                console.log("Stopwatch");
                break;
            case 5:
                console.log("Countdown Timer");
                break;
            case 6:
                console.log("Auto Update Date And Time");
                break;
            default:
                console.log("Enter a valid number between 1-6: ");
                this.menu();
        }
    }

    profiles() {
        console.log("Empty profile list");
        this.menu();
    }

    simService() {
        console.log("Nothing to show here")

    }

}
const nokia3310 = new Nokia3310();
nokia3310.menu();