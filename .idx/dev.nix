{ pkgs, ... }: {
	# Which nixpkgs channel to use.
	channel = "stable-23.11"; # or "unstable"
	# Use https://search.nixos.org/packages to find packages
	packages = [
		pkgs.nodejs_20
	];
	# Sets environment variables in the workspace
	env = {
      NEXT_PUBLIC_FIREBASE_PROJECT_ID = "YOUR_PROJECT_ID_HERE";
      GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL = "YOUR_CLIENT_EMAIL_HERE";
      # IMPORTANT: Make sure to wrap the private key in single quotes (')
      # if it contains special characters.
      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY = "YOUR_PRIVATE_KEY_HERE";
    };
}
