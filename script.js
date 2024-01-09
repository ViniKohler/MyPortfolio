document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.querySelector(".download-button");
  
    downloadButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      const githubActionsEndpoint = "https://api.github.com/repos/ViniKohler/WealthTracker/actions/workflows/build_and_release.yml/dispatches";
  
      const githubToken = "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";
  
      const requestOptions = {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${githubToken}`,
          "Accept": "application/vnd.github.v3+json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ref: "main"
        })
      };
  
      fetch(githubActionsEndpoint, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
          }
          console.log("GitHub Actions acionado com sucesso!");
        })
        .catch(error => console.error(error));
    });
  });