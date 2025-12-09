<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\BroadcastMessage;

class NewProposalNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    protected $proposal;

    public function __construct($proposal)
    {
        $this->proposal = $proposal;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database', 'broadcast'];
    }
    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $publicUrl = env('PUBLIC_URL', 'https://default.url'); // 'https://default.url' is a fallback in case the env variable is not set

        return (new MailMessage)
                    ->subject('New Proposal Received')
                    ->line('You have received a new proposal.')
                    ->action('View Proposal', $publicUrl . '/brands/proposals/' . $this->proposal->id)
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'proposal_id' => $this->proposal->id,
            'message' => 'You have received a new proposal.'
        ];
    }
    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'proposal_id' => $this->proposal->id,
            'message' => 'You have received a new proposal.'
        ]);
    }
}
