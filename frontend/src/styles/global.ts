const global = `

html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
  
#root {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.wrapper {
  flex: 1 0 auto;
}

main {
  height: 100%;
}

header {
  padding-bottom: 30px;
}

h1 {
margin: 0;
}

.flex {
  display: flex;
  flex-direction: column;
}

.align-items-center {
  align-items: center;
}

.place-content-center {
  place-content: center;
}

.key {
  display: flex;
  align-items: center;
  place-content: center;
  user-select: none;
  
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
}

.display {
  display: flex;
  height: 100%;
  align-items: center;
  float: right;
  padding-right: 15%;
  font-size: 2rem;
}

`;

export default global;