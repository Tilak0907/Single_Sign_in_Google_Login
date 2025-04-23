import React from 'react';

const EventCard = ({ meeting }) => {
  const handleAddEvent = async (accessToken) => {
    const event = {
      summary: meeting.title,
      description: meeting.description,
      start: {
        dateTime: meeting.start,
        timeZone: 'Asia/Kolkata',
      },
      end: {
        dateTime: meeting.end,
        timeZone: 'Asia/Kolkata',
      },
    };

    try {
      const res = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Event added!");
        console.log("Event added:", data);
      } else {
        console.error("Error adding event:", data);
        alert("Failed to add event");
      }
    } catch (error) {
      console.error("Network error adding event:", error);
      alert("Failed to add event");
    }
  };

  const handleAdd = () => {
    /* Load Google's token client */
    const tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: '52390080266-ijp0vq9g1nu8ljivk818tfnnoe14avgl.apps.googleusercontent.com', // ⬅️ Replace with your actual client ID
      scope: 'https://www.googleapis.com/auth/calendar.events',
      callback: (response) => {
        if (response.access_token) {
          handleAddEvent(response.access_token);
        } else {
          alert("Failed to get access token");
        }
      },
    });

    tokenClient.requestAccessToken();
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '1rem',
      width: '250px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h3>{meeting.title}</h3>
      <p>{meeting.description}</p>
      <p><strong>Start:</strong> {new Date(meeting.start).toLocaleString()}</p>
      <p><strong>End:</strong> {new Date(meeting.end).toLocaleString()}</p>
      <button onClick={handleAdd} style={{ marginTop: '0.5rem' }}>
        Add to Calendar
      </button>
    </div>
  );
};

export default EventCard;
