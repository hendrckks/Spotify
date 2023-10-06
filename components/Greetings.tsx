const Greetings = () => {
  function secondsSinceMidnight() {
    var now = new Date();
    var midnight = new Date(now);
    midnight.setHours(0, 0, 0, 0);

    var seconds = Math.floor((+now - +midnight) / 1000);
    return seconds;
  }

  var seconds = secondsSinceMidnight();

  const GoodMorningMessage = "Good morning";

  const GoodAfternoonMessage = "Good afternoon";

  const GoodeveningMessage = "Good evening";

  function GreetingFunc() {
    var message = "";
    if (seconds <= 43199) {
      return (message = GoodMorningMessage);
    } else if (seconds > 43199 && seconds <= 61199) {
      return (message = GoodAfternoonMessage);
    } else if (seconds > 61199) {
      return (message = GoodeveningMessage);
    }
  }

  return (
    <div className="flex items-center px-6 caret-transparent">
      <p className="text-[32px] font-extrabold">{GreetingFunc()}</p>
    </div>
  );
};

export default Greetings;
