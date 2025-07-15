import React, { useEffect, useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Heart, 
  MessageCircle, 
  Share2,
  Eye,
  BarChart3,
  Calendar
} from 'lucide-react';
import MetricCard from '../components/dashboard/MetricCard';
import EngagementChart from '../components/charts/EngagementChart';
import PlatformChart from '../components/charts/PlatformChart';
import RecentPosts from '../components/dashboard/RecentPosts';
import { useSocket } from '../contexts/SocketContext';

interface DashboardMetrics {
  totalFollowers: number;
  totalEngagement: number;
  totalReach: number;
  totalImpressions: number;
  followersGrowth: number;
  engagementRate: number;
  reachGrowth: number;
  impressionsGrowth: number;
}

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalFollowers: 0,
    totalEngagement: 0,
    totalReach: 0,
    totalImpressions: 0,
    followersGrowth: 0,
    engagementRate: 0,
    reachGrowth: 0,
    impressionsGrowth: 0
  });
  const [loading, setLoading] = useState(true);
  const { socket } = useSocket();

  useEffect(() => {
    fetchDashboardData();
    
    // Listen for real-time updates
    if (socket) {
      socket.on('metrics-update', (data: DashboardMetrics) => {
        setMetrics(data);
      });
    }

    return () => {
      if (socket) {
        socket.off('metrics-update');
      }
    };
  }, [socket]);

  const fetchDashboardData = async () => {
    try {
      // Simulate API call
      setTimeout(() => {
        setMetrics({
          totalFollowers: 125430,
          totalEngagement: 8945,
          totalReach: 89234,
          totalImpressions: 234567,
          followersGrowth: 12.5,
          engagementRate: 7.2,
          reachGrowth: 15.8,
          impressionsGrowth: 23.4
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your social media overview.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 days
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Followers"
          value={metrics.totalFollowers.toLocaleString()}
          change={metrics.followersGrowth}
          icon={<Users className="w-6 h-6" />}
          color="blue"
        />
        <MetricCard
          title="Engagement"
          value={metrics.totalEngagement.toLocaleString()}
          change={metrics.engagementRate}
          icon={<Heart className="w-6 h-6" />}
          color="red"
        />
        <MetricCard
          title="Reach"
          value={metrics.totalReach.toLocaleString()}
          change={metrics.reachGrowth}
          icon={<TrendingUp className="w-6 h-6" />}
          color="green"
        />
        <MetricCard
          title="Impressions"
          value={metrics.totalImpressions.toLocaleString()}
          change={metrics.impressionsGrowth}
          icon={<Eye className="w-6 h-6" />}
          color="purple"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Engagement Over Time</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <EngagementChart />
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Platform Distribution</h3>
            <Share2 className="w-5 h-5 text-gray-400" />
          </div>
          <PlatformChart />
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Posts Performance</h3>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View All
            </button>
          </div>
        </div>
        <RecentPosts />
      </div>
    </div>
  );
};

export default Dashboard;