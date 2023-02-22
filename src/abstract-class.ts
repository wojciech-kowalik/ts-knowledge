abstract class Command {
  abstract commandLine(): string;

  execute() {
    console.log("Executing: ", this.commandLine());
  }
}

class GitResetCommand extends Command {
  commandLine(): string {
    return "git reset --hard";
  }
}

class GitFetchCommand extends Command {
  commandLine(): string {
    return "git fetch --all";
  }
}

new GitResetCommand().execute();
new GitFetchCommand().execute();
