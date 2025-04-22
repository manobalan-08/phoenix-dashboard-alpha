import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { FileUp } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-xl mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="achievements">Skills & Achievements</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>
                Manage your personal information and public profile.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-xl">
                    A
                  </div>
                  <Button variant="outline">Upload Photo</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Admin User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Job Role</Label>
                  <Input id="role" defaultValue="CEO & Founder" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="admin@startup.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" defaultValue="Leading a team of innovators at our startup" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and security settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="admin_user" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input id="timezone" defaultValue="(GMT-06:00) Central Time (US & Canada)" />
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="current_password">Current Password</Label>
                    <Input id="current_password" type="password" />
                  </div>
                  <div className="space-y-2"></div>
                  <div className="space-y-2">
                    <Label htmlFor="new_password">New Password</Label>
                    <Input id="new_password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm_password">Confirm New Password</Label>
                    <Input id="confirm_password" type="password" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Update Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="achievements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Achievements</CardTitle>
              <CardDescription>
                Showcase your professional certifications, skills, and achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="certifications">Certifications</Label>
                  <div className="mt-2 grid gap-4">
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Button variant="outline" className="h-auto p-4 flex-col items-center gap-2">
                        <FileUp className="h-6 w-6" />
                        <span className="text-xs">Upload Certificate</span>
                      </Button>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Upload your certifications</p>
                        <p className="text-sm text-muted-foreground">
                          Supported formats: PDF, JPG, PNG (max 5MB)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Key Skills</Label>
                  <Textarea
                    id="skills"
                    placeholder="List your key professional skills..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-contributions">Company Contributions</Label>
                  <Textarea
                    id="company-contributions"
                    placeholder="Describe your major contributions and achievements in the company..."
                    className="min-h-[150px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="achievements">Other Achievements</Label>
                  <Textarea
                    id="achievements"
                    placeholder="Share your other professional achievements, awards, and recognitions..."
                    className="min-h-[150px]"
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Manage how you receive notifications and alerts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Push Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications on your device
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Monthly Reports</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive monthly progress reports
                    </p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Team Activity</h4>
                    <p className="text-sm text-muted-foreground">
                      Get notified about team member activities
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Marketing Emails</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about new features and updates
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
