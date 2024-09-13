document.addEventListener("DOMContentLoaded", function () {
  const infoContent = document.getElementById("info-content");

  // Data for the info section
  const infoItems = [
    {
      title: "Securing Smart Contracts",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/securing_contract.md",
      description:
        "A detailed guide on best practices for securing smart contracts to prevent common vulnerabilities.",
    },
    {
      title: "Git Information",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/git_info.md",
      description:
        "Comprehensive notes on using Git for version control, including commands, workflows, and tips.",
    },
    {
      title: "Object-Oriented Programming (OOP)",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/oops.md",
      description:
        "An overview of OOP concepts, principles, and implementation in different programming languages.",
    },
    {
      title: "Python Information",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/python.md",
      description:
        "Notes on Python programming covering basic to advanced topics, with examples and code snippets.",
    },
    {
      title: "Shells and Terminals Information",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/shells_terminals_info.md",
      description:
        "Information about different shells and terminals, commands, and scripting techniques.",
    },
    {
      title: "Fallback and Receive Functions",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/fallback_receive.md",
      description:
        "An explanation of fallback and receive functions in Solidity for handling Ether transfers to contracts.",
    },
    {
      title: "Library in Solidity",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/library_solidity.md",
      description:
        "Insights into creating and using libraries in Solidity to modularize and reuse code efficiently.",
    },
    {
      title: "Payable in Solidity",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/payable.md",
      description:
        "A detailed look at the payable keyword in Solidity, essential for enabling smart contracts to receive Ether.",
    },
    {
      title: "Random Number Generation in Solidity",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/random_no.md",
      description:
        "An explanation of techniques for generating random numbers in Solidity, with a focus on best practices.",
    },
    {
      title: "Git Initialization and New Repositories",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/git_init_new.md",
      description:
        "Notes on initializing Git repositories and setting up new projects with version control from the start.",
    },
    {
      title: "ABI Encoding and Decoding",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/ABI_encoding_decoding.md",
      description:
        "An explanation of ABI encoding and decoding techniques in Solidity for calldata and function calls.",
    },
    {
      title: "Checks-Effects-Interactions Pattern",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/Checks_Effects_Interactions.md",
      description:
        "A guide on the Checks-Effects-Interactions pattern in Solidity to prevent reentrancy attacks.",
    },
    {
      title: "ERC20",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/ERC20.md",
      description:
        "A deep dive into the ERC20 token standard, including code examples and best practices.",
    },
    {
      title: "ERC721",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/ERC721.md",
      description:
        "An overview of the ERC721 non-fungible token (NFT) standard, including use cases and implementation.",
    },
    {
      title: "Encoding and Decoding Calldata",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/EncodingDecodingCalldata.md",
      description:
        "A detailed explanation of calldata encoding and decoding in Solidity.",
    },
    {
      title: "Calling Another Contract",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/calling_another_contract.md",
      description:
        "A guide on how to call and interact with other contracts from within a Solidity smart contract.",
    },
    {
      title: "Coin vs Token",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/coin_vs_token.md",
      description:
        "An article explaining the difference between coins and tokens in the blockchain ecosystem.",
    },
    {
      title: "Decimal Concept in ERC20",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/decimal_concept_ERC20.md",
      description:
        "Understanding the concept of decimals in ERC20 tokens and how they impact token calculations.",
    },
    {
      title: "Delegatecall",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/delegatecall.md",
      description:
        "An in-depth look at the delegatecall function in Solidity, used for executing code in another contract.",
    },
    {
      title: "Hardhat Queries",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/hardhat_queries.md",
      description:
        "Common queries and tasks in Hardhat for testing and deploying Solidity contracts.",
    },
    {
      title: "Proxy",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/proxy.md",
      description:
        "An introduction to proxy contracts in Solidity, allowing for contract upgrades and modularity.",
    },
    {
      title: "Proxy Contracts",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/proxy_contracts.md",
      description:
        "A detailed guide on how to create and use proxy contracts for upgradeable smart contracts.",
    },
    {
      title: "Proxy Patterns",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/proxy_patterns.md",
      description:
        "Various proxy patterns used in Solidity development, including transparent and universal proxies.",
    },
    {
      title: "Secure Contract Solidity",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/secure_contract_solidity.md",
      description:
        "Best practices and techniques for writing secure smart contracts in Solidity.",
    },
    {
      title: "Solidity OOPs",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/solidity_opps.md",
      description:
        "A look at Object-Oriented Programming principles in Solidity, with examples of inheritance and polymorphism.",
    },
    {
      title: "Transfer, Send, and Call",
      url: "https://github.com/RanjanKumar93/web3_info/blob/main/transfer_send_call.md",
      description:
        "A comparison of transfer, send, and call methods in Solidity for sending Ether.",
    },
    {
      title: "Uninstall VS Code in WSL",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/Uninstall_vscode_wsl.md",
      description:
        "Instructions for uninstalling Visual Studio Code from a WSL environment.",
    },
    {
      title: "Classes and Functions in Python",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/classes_functions.md",
      description:
        "Notes on defining and using classes and functions in Python, with practical examples.",
    },
    {
      title: "Error and Exception Handling in Python",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/error_exception.md",
      description:
        "A guide to handling errors and exceptions in Python, including custom exception creation.",
    },
    {
      title: "Git Information",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/git_info.md",
      description:
        "Comprehensive notes on using Git for version control, including commands, workflows, and tips.",
    },
    {
      title: "Git Initialization and New Repositories",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/git_init_new.md",
      description:
        "Notes on initializing Git repositories and setting up new projects with version control from the start.",
    },
    {
      title: "Git Push Error Resolution",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/gitpush_error.md",
      description:
        "A guide to resolving common Git push errors and troubleshooting Git commands.",
    },
    {
      title: "Go HTTP Package",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/go_http.md",
      description:
        "Notes on using the Go `http` package for building web servers and handling requests.",
    },
    {
      title: "NPM and NPX",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/npm_npx.md",
      description:
        "An explanation of NPM and NPX commands for managing Node.js packages and running scripts.",
    },
    {
      title: "OOP Concepts",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/oops.md",
      description:
        "An overview of Object-Oriented Programming concepts and implementation across languages.",
    },
    {
      title: "OOP Functions",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/oops_func.md",
      description:
        "A detailed explanation of functions in OOP, including their use in encapsulation and abstraction.",
    },
    {
      title: "Pygame Information",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/pygame.md",
      description:
        "Notes on using the Pygame library for building games in Python, with example code.",
    },
    {
      title: "Python Information",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/python.md",
      description:
        "Notes on Python programming covering basic to advanced topics, with examples and code snippets.",
    },
    {
      title: "Shells and Terminals Information",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/shells_terminals_info.md",
      description:
        "Information about different shells and terminals, commands, and scripting techniques.",
    },
    {
      title: "Sorted Length in Python",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/sorted_len.md",
      description:
        "Understanding how the `sorted` and `len` functions work in Python, with practical examples.",
    },
    {
      title: "Virtual Environment in Python",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/virtual_env_python.md",
      description:
        "A guide to setting up and managing virtual environments in Python for project isolation.",
    },
    {
      title: "WSL Program Installation",
      url: "https://github.com/RanjanKumar93/web2_info/blob/main/wsl_program_install.md",
      description:
        "Instructions for installing and managing programs in the Windows Subsystem for Linux (WSL).",
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
