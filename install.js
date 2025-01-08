module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git lfs install"
        ],
        path: "app"
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "git clone --recurse-submodules https://github.com/microsoft/TRELLIS.git app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [          
          "uv pip install -U setuptools wheel ninja"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          xformers: true
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install --no-build-isolation -r ../requirements.txt",
          "uv pip install huggingface_hub hf_transfer"
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "app/env"             
      }
    }
  ]
};
