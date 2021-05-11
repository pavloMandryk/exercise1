export const getAppsById = async (id) => {
      try {
        const url = "https://api.thegraph.com/subgraphs/name/1hive/aragon-xdai"
        const options = {
            method: "POST",
            body: JSON.stringify({
              query: `
              {
                      organizations(where: {id: "${id}"}) {
                      apps {
                          repoName,
                          address,
                          isForwarder,
                          isUpgradeable,
                          version {
                          semanticVersion
                          }
                      }
                  }
              }
                `,
            }),
          }
      return fetch(url, options)
      .then((res) => res.json())

      } catch (error) {
        console.error(error)
      } 
};

export const getAppsData = async () => {
    return fetch("https://api.thegraph.com/subgraphs/name/1hive/aragon-xdai", {
      method: "POST",
      body: JSON.stringify({
        query: `
        {
            organizations(first: 1000) {
              apps {
                    repoName
                }
              }
          }
          `,
      }),
    })
      .then((res) => res.json())

};
