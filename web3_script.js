// Project data array
const web3_projects = [
  {
    title: "Lottery",
    description:
      "A decentralized lottery system where participants can purchase tickets, and a winner is selected randomly.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/Lottery.sol",
  },
  {
    title: "Message Center Contract",
    description:
      "A decentralized messaging system allowing users to securely send and receive messages on the blockchain.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/MessageCenterContract.sol",
  },
  {
    title: "Mini Voting System",
    description:
      "A simple and secure voting system that allows users to vote on proposals using blockchain technology.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/MiniVotingSystem.sol",
  },
  {
    title: "MyERC20",
    description:
      "A custom ERC20 token implementation, showcasing the creation and management of digital assets on Ethereum.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/MyERC20.sol",
  },
  {
    title: "OpenZeppelin ERC20",
    description:
      "An ERC20 token built using the OpenZeppelin library, ensuring security and best practices in smart contract development.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/OpenZeppelinERC20.sol",
  },
  {
    title: "Personal Wallet",
    description:
      "A smart contract for a personal cryptocurrency wallet, providing secure storage and transaction functionality.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/PersonalWallet.sol",
  },
  {
    title: "Piggy Bank",
    description:
      "A smart contract piggy bank that allows users to save funds and withdraw them when a goal is reached.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/PiggyBank.sol",
  },
  {
    title: "Smart Twitter",
    description:
      "A decentralized social media platform where users can post messages and interact with others on the blockchain.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/SmartTwitter.sol",
  },
  {
    title: "ToDo List",
    description:
      "A smart contract-based to-do list application that allows users to manage tasks securely on the blockchain.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/ToDoList.sol",
  },
  {
    title: "Vote",
    description:
      "A decentralized voting system ensuring transparency and security in the electoral process using blockchain technology.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/Vote.sol",
  },
  {
    title: "Abstract Interface Contract",
    description:
      "A contract demonstrating the use of abstract contracts and interfaces in Solidity to build modular and reusable components.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/AbstractInterfaceContract.sol",
  },
  {
    title: "Library with Books",
    description:
      "A smart contract representing a library system where users can borrow and return books, ensuring data integrity on the blockchain.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/LibraryWithBooks.sol",
  },
  {
    title: "Calling Other Contract",
    description:
      "A smart contract illustrating how to interact with other contracts, demonstrating cross-contract communication in Solidity.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/CallingOtherContract.sol",
  },
  {
    title: "Hotel Room Booking",
    description:
      "A decentralized application allowing users to book hotel rooms securely on the blockchain, ensuring transparency and trust.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/HotelRoomBooking.sol",
  },
  {
    title: "Secret Contract",
    description:
      "A smart contract designed to securely store and manage confidential information on the blockchain.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/SecretContract.sol",
  },
  {
    title: "Public Voting",
    description:
      "A smart contract-based public voting system ensuring secure and transparent elections with real-time vote tallying.",
    link: "https://github.com/RanjanKumar93/solidity_contracts/blob/main/PublicVoting.sol",
  },
];

// Generate project cards
const projectGrid = document.getElementById("project-grid");

web3_projects.forEach((project) => {
  const projectCard = `
      <div class="bg-gray-800 p-5 rounded-lg shadow-lg">
        <a href="${project.link}" target="_blank" class="text-blue-400 hover:underline text-xl font-semibold">${project.title}</a>
        <p class="text-gray-400 mt-2">${project.description}</p>
      </div>
    `;
  projectGrid.innerHTML += projectCard;
});
