with (import <nixpkgs> {}); let
  env = bundlerEnv {
    name = "YourJekyllSite";
    inherit ruby;
    gemfile = ./Gemfile;
    lockfile = ./Gemfile.lock;
    gemset = ./gemset.nix;
  };
in
  stdenv.mkDerivation {
    name = "YourJekyllSite";
    nativeBuildInputs = [wget];
    buildInputs = [ruby jekyll wget python];

    # shellHook = ''
    #   exec ${env}/bin/jekyll serve --watch
    # '';
  }
