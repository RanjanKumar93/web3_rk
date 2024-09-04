document.addEventListener("DOMContentLoaded", function () {
    const infoContent = document.getElementById("info-content");
  
    // Data for the info section
    const infoItems = [
      {
        title: "Securing Smart Contracts",
        url: "https://github.com/RanjanKumar93/web3_info/blob/main/securing_contract.md",
        description: "A detailed guide on best practices for securing smart contracts to prevent common vulnerabilities.",
      },
      {
        title: "Git Information",
        url: "https://github.com/RanjanKumar93/web2_info/blob/main/git_info.md",
        description: "Comprehensive notes on using Git for version control, including commands, workflows, and tips.",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        url: "https://github.com/RanjanKumar93/web2_info/blob/main/oops.md",
        description: "An overview of OOP concepts, principles, and implementation in different programming languages.",
      },
      {
        title: "Python Information",
        url: "https://github.com/RanjanKumar93/web2_info/blob/main/python.md",
        description: "Notes on Python programming covering basic to advanced topics, with examples and code snippets.",
      },
      {
        title: "Shells and Terminals Information",
        url: "https://github.com/RanjanKumar93/web2_info/blob/main/shells_terminals_info.md",
        description: "Information about different shells and terminals, commands, and scripting techniques.",
      },
      {
        title: "Fallback and Receive Functions",
        url: "https://github.com/RanjanKumar93/web3_info/blob/main/fallback_receive.md",
        description: "An explanation of fallback and receive functions in Solidity for handling Ether transfers to contracts.",
      },
      {
        title: "Library in Solidity",
        url: "https://github.com/RanjanKumar93/web3_info/blob/main/library_solidity.md",
        description: "Insights into creating and using libraries in Solidity to modularize and reuse code efficiently.",
      },
      {
        title: "Payable in Solidity",
        url: "https://github.com/RanjanKumar93/web3_info/blob/main/payable.md",
        description: "A detailed look at the payable keyword in Solidity, essential for enabling smart contracts to receive Ether.",
      },
      {
        title: "Random Number Generation in Solidity",
        url: "https://github.com/RanjanKumar93/web3_info/blob/main/random_no.md",
        description: "An explanation of techniques for generating random numbers in Solidity, with a focus on best practices.",
      },
      {
        title: "Git Initialization and New Repositories",
        url: "https://github.com/RanjanKumar93/web2_info/blob/main/git_init_new.md",
        description: "Notes on initializing Git repositories and setting up new projects with version control from the start.",
      },
    ];
  
    // Generate HTML content dynamically
    infoItems.forEach((item) => {
      const infoCard = `
        <div class="bg-gray-800 p-5 rounded-lg shadow-lg">
          <a href="${item.url}" target="_blank" class="text-blue-400 hover:underline text-xl font-semibold">
            ${item.title}
          </a>
          <p class="text-gray-400 mt-2">${item.description}</p>
        </div>
      `;
      infoContent.innerHTML += infoCard;
    });
  });
  