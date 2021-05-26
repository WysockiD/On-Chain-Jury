pragma solidity >=0.6.0 <0.9.0;

//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";

contract YourContract {
    event setGuilty(string setguilty, address who);

    event setNotGuilty(string setnotguilty, address who);

    event FinalVerdict(string);

    event register(
        uint256 time,
        string id,
        address addr,
        uint256 count,
        bool voted,
        string verdict
    );

    struct Person {
        string ID;
        address addr;
        bool voted;
        bool verdict;
        uint256 weight;
        bool registered;
    }

    address Judge;
    mapping(address => Person) public juror;
    mapping(uint256 => address) internal index;
    uint256 public guiltyCount = 0;
    uint256 public notGuiltyCount = 0;
    uint256 public juryCount = 0;
    bool public inProgress = true;
    bool internal done = false;
    string internal finalVertictGuilty =
        "The Jury Has Decided On a Verdict Of Guilty";
    string internal finalVertictNotGuilty =
        "The Jury Has Decided On a Verdict Of Not Guilty";
    string internal hungJury = "Hung Jury, Please Re-deliberate";

    constructor() {
        Judge = msg.sender;
    }

    function Register(address juryMember, string memory FullName) public {
        require(juror[juryMember].registered == false);
        juror[juryMember].weight = 1;
        juror[juryMember].voted = false;
        juryCount += 1;
        juror[juryMember].addr = juryMember;
        juror[juryMember].ID = FullName;
        juror[juryMember].registered = true;
        emit register(
            block.timestamp,
            FullName,
            msg.sender,
            juryCount,
            false,
            ""
        );
    }

    function Guilty(bool) public {
        Person storage sender = juror[msg.sender];
        if (sender.voted == true) return;
        if (inProgress == false) return;
        guiltyCount += 1;
        sender.verdict = true;
        sender.voted = true;
        emit register(
            block.timestamp,
            sender.ID,
            msg.sender,
            juryCount,
            true,
            " Guilty"
        );
    }

    function NotGuilty(bool) public {
        Person storage sender = juror[msg.sender];
        if (sender.voted == true) return;
        if (inProgress == false) return;
        notGuiltyCount += 1;
        sender.voted = true;
        emit register(
            block.timestamp,
            sender.ID,
            msg.sender,
            juryCount,
            true,
            " Not Guilty"
        );
    }

    function Finish(bool) public {
        inProgress = false;
    }

    function restore() external {
        require(guiltyCount < juryCount);
        require(notGuiltyCount < juryCount);
        Person storage sender = juror[msg.sender];
        guiltyCount = 0;
        notGuiltyCount = 0;
        inProgress = true;
        sender.voted = false;
        emit FinalVerdict(hungJury);
        emit register(
            block.timestamp,
            sender.ID,
            msg.sender,
            juryCount,
            false,
            ""
        );
    }

    function Verdict() public returns (string memory) {
        require(inProgress == false);

        if (guiltyCount == juryCount) {
            require(done == false);
            emit FinalVerdict(finalVertictGuilty);
            done = true;
            return finalVertictGuilty;
        }
        if (notGuiltyCount == juryCount) {
            require(done == false);
            emit FinalVerdict(finalVertictNotGuilty);
            done = true;
            return finalVertictNotGuilty;
        } else {
            Person storage sender = juror[msg.sender];
            guiltyCount = 0;
            notGuiltyCount = 0;
            inProgress = true;
            sender.voted = false;
            done = false;
            emit FinalVerdict(hungJury);
            emit register(
                block.timestamp,
                sender.ID,
                msg.sender,
                juryCount,
                false,
                ""
            );
        }
    }
}
