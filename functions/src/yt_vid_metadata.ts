/* eslint-disable require-jsdoc, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, no-prototype-builtins, no-empty, @typescript-eslint/no-empty-interface */
// To parse this data:
//
//   import { Convert, YtVidMetadata } from "./file";
//
//   const ytVidMetadata = Convert.toYtVidMetadata(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface YtVidMetadata {
    page?: string;
    player_response: PlayerResponse;
    response?: Response;
    html5player: string;
    formats: any[];
    related_videos: RelatedVideo[];
    videoDetails: YtVidMetadataVideoDetails;
}

export interface PlayerResponse {
    responseContext: PlayerResponseResponseContext;
    playabilityStatus: PlayabilityStatus;
    heartbeatParams: HeartbeatParams;
    videoDetails: PlayerResponseVideoDetails;
    microformat: Microformat;
    trackingParams: string;
    attestation: Attestation;
    messages: Message[];
    frameworkUpdates: PlayerResponseFrameworkUpdates;
}

export interface Attestation {
    playerAttestationRenderer: PlayerAttestationRenderer;
}

export interface PlayerAttestationRenderer {
    challenge: string;
    botguardData: BotguardData;
}

export interface BotguardData {
    program: string;
    interpreterSafeUrl: InterpreterSafeURL;
    serverEnvironment: number;
}

export interface InterpreterSafeURL {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
}

export interface PlayerResponseFrameworkUpdates {
    entityBatchUpdate: PurpleEntityBatchUpdate;
}

export interface PurpleEntityBatchUpdate {
    mutations: PurpleMutation[];
    timestamp: Timestamp;
}

export interface PurpleMutation {
    entityKey: string;
    type: string;
    payload: Payload;
}

export interface Payload {
    offlineabilityEntity: OfflineabilityEntity;
}

export interface OfflineabilityEntity {
    key: string;
    addToOfflineButtonState: string;
}

export interface Timestamp {
    seconds: string;
    nanos: number;
}

export interface HeartbeatParams {
    softFailOnError: boolean;
    heartbeatServerData: string;
    heartbeatAttestationConfig: HeartbeatAttestationConfig;
}

export interface HeartbeatAttestationConfig {
    requiresAttestation: boolean;
}

export interface Message {
    mealbarPromoRenderer: MealbarPromoRenderer;
}

export interface MealbarPromoRenderer {
    messageTexts: DetailsText[];
    actionButton: ActionButtonClass;
    dismissButton: DismissButton;
    triggerCondition: string;
    style: string;
    trackingParams: string;
    impressionEndpoints: AcceptCommand[];
    isVisible: boolean;
    messageTitle: DetailsText;
}

export interface ActionButtonClass {
    buttonRenderer: ActionButtonButtonRenderer;
}

export interface ActionButtonButtonRenderer {
    style: string;
    size: string;
    text: DetailsText;
    trackingParams: string;
    command?: PurpleCommand;
    isDisabled?: boolean;
}

export interface PurpleCommand {
    clickTrackingParams: string;
    commandExecutorCommand: PurpleCommandExecutorCommand;
}

export interface PurpleCommandExecutorCommand {
    commands: FluffyCommand[];
}

export interface FluffyCommand {
    clickTrackingParams?: string;
    commandMetadata: PurpleCommandMetadata;
    browseEndpoint?: CommandBrowseEndpoint;
    feedbackEndpoint?: FeedbackEndpoint;
}

export interface CommandBrowseEndpoint {
    browseId: BrowseID;
    params: string;
}

export enum BrowseID {
    FEhashtag = "FEhashtag",
    SPunlimited = "SPunlimited",
}

export interface PurpleCommandMetadata {
    webCommandMetadata: PurpleWebCommandMetadata;
}

export interface PurpleWebCommandMetadata {
    url?: string;
    webPageType?: WebPageType;
    rootVe?: number;
    apiUrl?: PurpleAPIURL;
    sendPost?: boolean;
}

export enum PurpleAPIURL {
    YoutubeiV1Browse = "/youtubei/v1/browse",
    YoutubeiV1Feedback = "/youtubei/v1/feedback",
}

export enum WebPageType {
    WebPageTypeBrowse = "WEB_PAGE_TYPE_BROWSE",
    WebPageTypeChannel = "WEB_PAGE_TYPE_CHANNEL",
    WebPageTypeSearch = "WEB_PAGE_TYPE_SEARCH",
    WebPageTypeUnknown = "WEB_PAGE_TYPE_UNKNOWN",
    WebPageTypeWatch = "WEB_PAGE_TYPE_WATCH",
}

export interface FeedbackEndpoint {
    feedbackToken: string;
    uiActions: UIActions;
}

export interface UIActions {
    hideEnclosingContainer: boolean;
}

export interface DetailsText {
    runs: DetailsTextRun[];
}

export interface DetailsTextRun {
    text: string;
}

export interface DismissButton {
    buttonRenderer: PurpleButtonRenderer;
}

export interface PurpleButtonRenderer {
    style: string;
    size: string;
    text: DetailsText;
    trackingParams: string;
    command: TentacledCommand;
}

export interface TentacledCommand {
    clickTrackingParams: string;
    commandExecutorCommand: FluffyCommandExecutorCommand;
}

export interface FluffyCommandExecutorCommand {
    commands: AcceptCommand[];
}

export interface AcceptCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    feedbackEndpoint: FeedbackEndpoint;
}

export interface AcceptCommandCommandMetadata {
    webCommandMetadata: FluffyWebCommandMetadata;
}

export interface FluffyWebCommandMetadata {
    sendPost: boolean;
    apiUrl?: FluffyAPIURL;
}

export enum FluffyAPIURL {
    YoutubeiV1AccountAccountMenu = "/youtubei/v1/account/account_menu",
    YoutubeiV1BrowseEditPlaylist = "/youtubei/v1/browse/edit_playlist",
    YoutubeiV1Feedback = "/youtubei/v1/feedback",
    YoutubeiV1GetSurvey = "/youtubei/v1/get_survey",
    YoutubeiV1Next = "/youtubei/v1/next",
    YoutubeiV1PlaylistCreate = "/youtubei/v1/playlist/create",
    YoutubeiV1ShareGetSharePanel = "/youtubei/v1/share/get_share_panel",
    YoutubeiV1UpdatedMetadata = "/youtubei/v1/updated_metadata",
}

export interface Microformat {
    playerMicroformatRenderer: PlayerMicroformatRenderer;
}

export interface PlayerMicroformatRenderer {
    thumbnail: BackgroundClass;
    embed: Embed;
    title: TitleClass;
    description: TitleClass;
    lengthSeconds: string;
    ownerProfileUrl: string;
    externalChannelId: string;
    isFamilySafe: boolean;
    availableCountries: string[];
    isUnlisted: boolean;
    hasYpcMetadata: boolean;
    viewCount: string;
    category: string;
    publishDate: Date;
    ownerChannelName: string;
    liveBroadcastDetails: LiveBroadcastDetails;
    uploadDate: Date;
}

export interface TitleClass {
    simpleText: string;
}

export interface Embed {
    iframeUrl: string;
    flashUrl: string;
    width: number;
    height: number;
    flashSecureUrl: string;
}

export interface LiveBroadcastDetails {
    isLiveNow: boolean;
    startTimestamp: Date;
}

export interface BackgroundClass {
    thumbnails: ThumbnailElement[];
}

export interface ThumbnailElement {
    url: string;
    width: number;
    height: number;
}

export interface PlayabilityStatus {
    status: string;
    reason: string;
    playableInEmbed: boolean;
    liveStreamability: LiveStreamability;
    miniplayer: Miniplayer;
    contextParams: string;
}

export interface LiveStreamability {
    liveStreamabilityRenderer: LiveStreamabilityRenderer;
}

export interface LiveStreamabilityRenderer {
    videoId: string;
    offlineSlate: OfflineSlate;
    pollDelayMs: string;
}

export interface OfflineSlate {
    liveStreamOfflineSlateRenderer: LiveStreamOfflineSlateRenderer;
}

export interface LiveStreamOfflineSlateRenderer {
    scheduledStartTime: string;
    mainText: DetailsText;
    subtitleText: TitleClass;
    thumbnail: BackgroundClass;
    offlineSlateStyle: string;
}

export interface Miniplayer {
    miniplayerRenderer: MiniplayerRenderer;
}

export interface MiniplayerRenderer {
    playbackMode: string;
}

export interface PlayerResponseResponseContext {
    serviceTrackingParams: ServiceTrackingParam[];
    mainAppWebResponseContext: MainAppWebResponseContext;
    webResponseContextExtensionData: PurpleWebResponseContextExtensionData;
}

export interface MainAppWebResponseContext {
    loggedOut: boolean;
}

export interface ServiceTrackingParam {
    service: string;
    params: Param[];
}

export interface Param {
    key: string;
    value: string;
}

export interface PurpleWebResponseContextExtensionData {
    hasDecorated: boolean;
}

export interface PlayerResponseVideoDetails {
    videoId: string;
    title: string;
    lengthSeconds: string;
    keywords: string[];
    channelId: string;
    isOwnerViewing: boolean;
    shortDescription: string;
    isCrawlable: boolean;
    thumbnail: BackgroundClass;
    isUpcoming: boolean;
    allowRatings: boolean;
    viewCount: string;
    author: string;
    isLowLatencyLiveStream: boolean;
    isPrivate: boolean;
    isUnpluggedCorpus: boolean;
    latencyClass: string;
    isLiveContent: boolean;
}

export interface RelatedVideo {
    id: string;
    title: string;
    published: string;
    author: Author;
    short_view_count_text: string;
    view_count: string;
    length_seconds: number;
    thumbnails: ThumbnailElement[];
    richThumbnails: ThumbnailElement[];
    isLive: boolean;
}

export interface Author {
    id: string;
    name: string;
    user: string;
    channel_url: string;
    user_url: string;
    thumbnails: ThumbnailElement[];
    verified: boolean;
    external_channel_url?: string;
    subscriber_count?: number;
}

export interface Response {
    responseContext: ResponseResponseContext;
    contents: Contents;
    currentVideoEndpoint: CurrentVideoEndpointClass;
    trackingParams: string;
    playerOverlays: PlayerOverlays;
    overlay: Overlay;
    onResponseReceivedEndpoints: OnResponseReceivedEndpoint[];
    engagementPanels: EngagementPanel[];
    topbar: Topbar;
    frameworkUpdates: ResponseFrameworkUpdates;
}

export interface Contents {
    twoColumnWatchNextResults: TwoColumnWatchNextResults;
}

export interface TwoColumnWatchNextResults {
    results: TwoColumnWatchNextResultsResults;
    secondaryResults: TwoColumnWatchNextResultsSecondaryResults;
    autoplay: TwoColumnWatchNextResultsAutoplay;
    conversationBar: ConversationBar;
}

export interface TwoColumnWatchNextResultsAutoplay {
    autoplay: AutoplayAutoplay;
}

export interface AutoplayAutoplay {
    sets: Set[];
    countDownSecs: number;
    trackingParams: string;
}

export interface Set {
    mode: string;
    autoplayVideo: NavigationEndpoint;
}

export interface NavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: AutoplayVideoCommandMetadata;
    watchEndpoint: AutoplayVideoWatchEndpoint;
}

export interface AutoplayVideoCommandMetadata {
    webCommandMetadata: TentacledWebCommandMetadata;
}

export interface TentacledWebCommandMetadata {
    url: string;
    webPageType: WebPageType;
    rootVe: number;
}

export interface AutoplayVideoWatchEndpoint {
    videoId: string;
    params: string;
    playerParams: string;
    watchEndpointSupportedPrefetchConfig: WatchEndpointSupportedPrefetchConfig;
}

export interface WatchEndpointSupportedPrefetchConfig {
    prefetchHintConfig: PrefetchHintConfig;
}

export interface PrefetchHintConfig {
    prefetchPriority: number;
    countdownUiRelativeSecondsPrefetchCondition: number;
}

export interface ConversationBar {
    liveChatRenderer: LiveChatRenderer;
}

export interface LiveChatRenderer {
    continuations: Continuation[];
    header: LiveChatRendererHeader;
    trackingParams: string;
    clientMessages: ClientMessages;
    initialDisplayState: string;
    showHideButton: ShowHideButton;
}

export interface ClientMessages {
    reconnectMessage: DetailsText;
    unableToReconnectMessage: DetailsText;
    fatalError: DetailsText;
    reconnectedMessage: DetailsText;
    genericError: DetailsText;
}

export interface Continuation {
    reloadContinuationData: ReloadContinuationData;
}

export interface ReloadContinuationData {
    continuation: string;
    clickTrackingParams: string;
}

export interface LiveChatRendererHeader {
    liveChatHeaderRenderer: LiveChatHeaderRenderer;
}

export interface LiveChatHeaderRenderer {
    overflowMenu: OverflowMenu;
    collapseButton: CloseButtonClass;
    viewSelector: ViewSelector;
}

export interface CloseButtonClass {
    buttonRenderer: CloseButtonButtonRenderer;
}

export interface CloseButtonButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    accessibility?: Accessibility;
    trackingParams: string;
    icon?: Icon;
    navigationEndpoint?: CurrentVideoEndpointClass;
    accessibilityData?: AccessibilityData;
}

export interface Accessibility {
    label: string;
}

export interface AccessibilityData {
    accessibilityData: Accessibility;
}

export interface Icon {
    iconType: string;
}

export interface CurrentVideoEndpointClass {
    clickTrackingParams: string;
    commandMetadata: AutoplayVideoCommandMetadata;
    watchEndpoint: CurrentVideoEndpointWatchEndpoint;
}

export interface CurrentVideoEndpointWatchEndpoint {
    videoId: string;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface WatchEndpointSupportedOnesieConfig {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig;
}

export interface Html5PlaybackOnesieConfig {
    commonConfig: CommonConfig;
}

export interface CommonConfig {
    url: string;
}

export interface OverflowMenu {
    menuRenderer: OverflowMenuMenuRenderer;
}

export interface OverflowMenuMenuRenderer {
    items: PurpleItem[];
    trackingParams: string;
    accessibility: AccessibilityData;
}

export interface PurpleItem {
    menuServiceItemRenderer?: MenuItemRenderer;
    menuNavigationItemRenderer?: MenuItemRenderer;
}

export interface MenuItemRenderer {
    text: DetailsText;
    icon: Icon;
    navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint;
    trackingParams: string;
    serviceEndpoint?: MenuNavigationItemRendererServiceEndpoint;
}

export interface MenuNavigationItemRendererNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: DefaultNavigationEndpointCommandMetadata;
    userFeedbackEndpoint?: UserFeedbackEndpoint;
    modalEndpoint?: PurpleModalEndpoint;
}

export interface DefaultNavigationEndpointCommandMetadata {
    webCommandMetadata: StickyWebCommandMetadata;
}

export interface StickyWebCommandMetadata {
    ignoreNavigation: boolean;
}

export interface PurpleModalEndpoint {
    modal: PurpleModal;
}

export interface PurpleModal {
    modalWithTitleAndButtonRenderer: PurpleModalWithTitleAndButtonRenderer;
}

export interface PurpleModalWithTitleAndButtonRenderer {
    title: DetailsText;
    content: DetailsText;
    button: PurpleButton;
}

export interface PurpleButton {
    buttonRenderer: FluffyButtonRenderer;
}

export interface FluffyButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: TitleClass;
    navigationEndpoint: PurpleNavigationEndpoint;
    trackingParams: string;
}

export interface PurpleNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: AutoplayVideoCommandMetadata;
    signInEndpoint: AdsEngagementPanelContentRenderer;
}

export interface AdsEngagementPanelContentRenderer {
    hack: boolean;
}

export interface UserFeedbackEndpoint {
    hack: boolean;
    bucketIdentifier: string;
}

export interface MenuNavigationItemRendererServiceEndpoint {
    clickTrackingParams: string;
    showLiveChatParticipantsEndpoint?: AdsEngagementPanelContentRenderer;
    popoutLiveChatEndpoint?: CommonConfig;
    toggleLiveChatTimestampsEndpoint?: AdsEngagementPanelContentRenderer;
    commandMetadata?: OnResponseReceivedEndpointCommandMetadata;
    signalServiceEndpoint?: PurpleSignalServiceEndpoint;
}

export interface OnResponseReceivedEndpointCommandMetadata {
    webCommandMetadata: IndigoWebCommandMetadata;
}

export interface IndigoWebCommandMetadata {
    sendPost: boolean;
}

export interface PurpleSignalServiceEndpoint {
    signal: Signal;
    actions: PurpleAction[];
}

export interface PurpleAction {
    clickTrackingParams: string;
    addToPlaylistCommand?: AddToPlaylistCommand;
    openPopupAction?: PurpleOpenPopupAction;
}

export interface AddToPlaylistCommand {
    openMiniplayer: boolean;
    openListPanel: boolean;
    videoId: string;
    listType: ListType;
    onCreateListCommand: OnCreateListCommand;
    videoIds: string[];
}

export enum ListType {
    PlaylistEditListTypeQueue = "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
}

export interface OnCreateListCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint;
}

export interface CreatePlaylistServiceEndpoint {
    videoIds: string[];
    params: Params;
}

export enum Params {
    CAQ3D = "CAQ%3D",
}

export interface PurpleOpenPopupAction {
    popup: PurplePopup;
    popupType: PopupType;
}

export interface PurplePopup {
    notificationActionRenderer: NotificationActionRenderer;
}

export interface NotificationActionRenderer {
    responseText: TitleClass;
    trackingParams: string;
}

export enum PopupType {
    Toast = "TOAST",
}

export enum Signal {
    ClientSignal = "CLIENT_SIGNAL",
}

export interface ViewSelector {
    sortFilterSubMenuRenderer: SortFilterSubMenuRenderer;
}

export interface SortFilterSubMenuRenderer {
    subMenuItems: SubMenuItem[];
    accessibility: AccessibilityData;
    trackingParams: string;
}

export interface SubMenuItem {
    title: string;
    selected: boolean;
    continuation: Continuation;
    accessibility: AccessibilityData;
    subtitle: string;
    trackingParams: string;
}

export interface ShowHideButton {
    toggleButtonRenderer: ShowHideButtonToggleButtonRenderer;
}

export interface ShowHideButtonToggleButtonRenderer {
    defaultText: DetailsText;
    toggledText: DetailsText;
    trackingParams: string;
}

export interface TwoColumnWatchNextResultsResults {
    results: ResultsResults;
}

export interface ResultsResults {
    contents: ContentElement[];
    trackingParams: string;
}

export interface ContentElement {
    videoPrimaryInfoRenderer?: VideoPrimaryInfoRenderer;
    videoSecondaryInfoRenderer?: VideoSecondaryInfoRenderer;
}

export interface VideoPrimaryInfoRenderer {
    title: DetailsText;
    viewCount: ViewCount;
    videoActions: VideoActions;
    trackingParams: string;
    updatedMetadataEndpoint: VideoPrimaryInfoRendererUpdatedMetadataEndpoint;
    superTitleLink: SuperTitleLink;
    dateText: TitleClass;
}

export interface SuperTitleLink {
    runs: SuperTitleLinkRun[];
}

export interface SuperTitleLinkRun {
    text: string;
    navigationEndpoint?: FluffyNavigationEndpoint;
    loggingDirectives?: LoggingDirectives;
}

export interface LoggingDirectives {
    trackingParams: string;
    visibility: Visibility;
}

export interface Visibility {
    types: string;
}

export interface FluffyNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    browseEndpoint: CommandBrowseEndpoint;
}

export interface EndpointCommandMetadata {
    webCommandMetadata: IndecentWebCommandMetadata;
}

export interface IndecentWebCommandMetadata {
    url: string;
    webPageType: WebPageType;
    rootVe: number;
    apiUrl?: PurpleAPIURL;
}

export interface VideoPrimaryInfoRendererUpdatedMetadataEndpoint {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    updatedMetadataEndpoint: UpdatedMetadataEndpointUpdatedMetadataEndpoint;
}

export interface UpdatedMetadataEndpointUpdatedMetadataEndpoint {
    videoId: string;
}

export interface VideoActions {
    menuRenderer: VideoActionsMenuRenderer;
}

export interface VideoActionsMenuRenderer {
    items: FluffyItem[];
    trackingParams: string;
    topLevelButtons: TopLevelButton[];
    accessibility: AccessibilityData;
}

export interface FluffyItem {
    menuNavigationItemRenderer: MenuItemRenderer;
}

export interface TopLevelButton {
    toggleButtonRenderer?: TopLevelButtonToggleButtonRenderer;
    buttonRenderer?: TopLevelButtonButtonRenderer;
    downloadButtonRenderer?: DownloadButtonRenderer;
}

export interface TopLevelButtonButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: DetailsText;
    serviceEndpoint?: ServiceEndpointClass;
    icon: Icon;
    tooltip: string;
    trackingParams: string;
    accessibilityData: AccessibilityData;
    accessibility?: Accessibility;
    command?: StickyCommand;
}

export interface StickyCommand {
    clickTrackingParams: string;
    commandMetadata: DefaultNavigationEndpointCommandMetadata;
    modalEndpoint: CommandModalEndpoint;
}

export interface CommandModalEndpoint {
    modal: FluffyModal;
}

export interface FluffyModal {
    modalWithTitleAndButtonRenderer: FluffyModalWithTitleAndButtonRenderer;
}

export interface FluffyModalWithTitleAndButtonRenderer {
    title: DetailsText;
    content: DetailsText;
    button: FluffyButton;
}

export interface FluffyButton {
    buttonRenderer: TentacledButtonRenderer;
}

export interface TentacledButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: TitleClass;
    navigationEndpoint: TentacledNavigationEndpoint;
    trackingParams: string;
}

export interface TentacledNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: AutoplayVideoCommandMetadata;
    signInEndpoint: PurpleSignInEndpoint;
}

export interface PurpleSignInEndpoint {
    nextEndpoint: CurrentVideoEndpointClass;
    idamTag: string;
}

export interface ServiceEndpointClass {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    shareEntityServiceEndpoint: ShareEntityServiceEndpoint;
}

export interface ShareEntityServiceEndpoint {
    serializedShareEntity: string;
    commands: ShareEntityServiceEndpointCommand[];
}

export interface ShareEntityServiceEndpointCommand {
    clickTrackingParams: string;
    openPopupAction: CommandOpenPopupAction;
}

export interface CommandOpenPopupAction {
    popup: FluffyPopup;
    popupType: string;
    beReused: boolean;
}

export interface FluffyPopup {
    unifiedSharePanelRenderer: UnifiedSharePanelRenderer;
}

export interface UnifiedSharePanelRenderer {
    trackingParams: string;
    showLoadingSpinner: boolean;
}

export interface DownloadButtonRenderer {
    trackingParams: string;
    style: string;
    size: string;
    targetId: string;
    command: DownloadButtonRendererCommand;
}

export interface DownloadButtonRendererCommand {
    clickTrackingParams: string;
    offlineVideoEndpoint: OfflineVideoEndpoint;
}

export interface OfflineVideoEndpoint {
    videoId: string;
    onAddCommand: OnAddCommand;
}

export interface OnAddCommand {
    clickTrackingParams: string;
    getDownloadActionCommand: GetDownloadActionCommand;
}

export interface GetDownloadActionCommand {
    videoId: string;
    params: string;
}

export interface TopLevelButtonToggleButtonRenderer {
    style: StyleClass;
    isToggled: boolean;
    isDisabled: boolean;
    defaultIcon: Icon;
    defaultText: ShortViewCountText;
    toggledText: ShortViewCountText;
    accessibility: Accessibility;
    trackingParams: string;
    defaultTooltip: string;
    toggledTooltip: string;
    toggledStyle: StyleClass;
    defaultNavigationEndpoint: DefaultNavigationEndpoint;
    accessibilityData: AccessibilityData;
    toggleButtonSupportedData: ToggleButtonSupportedData;
    targetId: string;
}

export interface DefaultNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: DefaultNavigationEndpointCommandMetadata;
    modalEndpoint: DefaultNavigationEndpointModalEndpoint;
}

export interface DefaultNavigationEndpointModalEndpoint {
    modal: TentacledModal;
}

export interface TentacledModal {
    modalWithTitleAndButtonRenderer: TentacledModalWithTitleAndButtonRenderer;
}

export interface TentacledModalWithTitleAndButtonRenderer {
    title: TitleClass;
    content: TitleClass;
    button: FluffyButton;
}

export interface ShortViewCountText {
    accessibility?: AccessibilityData;
    simpleText: string;
}

export interface StyleClass {
    styleType: string;
}

export interface ToggleButtonSupportedData {
    toggleButtonIdData: ToggleButtonIDData;
}

export interface ToggleButtonIDData {
    id: string;
}

export interface ViewCount {
    videoViewCountRenderer: VideoViewCountRenderer;
}

export interface VideoViewCountRenderer {
    viewCount: DetailsText;
    isLive: boolean;
}

export interface VideoSecondaryInfoRenderer {
    owner: Owner;
    description: DescriptionBodyTextClass;
    subscribeButton: SubscribeButton;
    metadataRowContainer: MetadataRowContainer;
    showMoreText: TitleClass;
    showLessText: TitleClass;
    trackingParams: string;
    defaultExpanded: boolean;
    descriptionCollapsedLines: number;
    showMoreCommand: ShowMoreCommand;
    showLessCommand: ShowLessCommand;
}

export interface DescriptionBodyTextClass {
    runs: DescriptionRun[];
}

export interface DescriptionRun {
    text: string;
    navigationEndpoint?: StickyNavigationEndpoint;
    loggingDirectives?: LoggingDirectives;
}

export interface StickyNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    urlEndpoint?: PurpleURLEndpoint;
    watchEndpoint?: PurpleWatchEndpoint;
    browseEndpoint?: CommandBrowseEndpoint;
}

export interface PurpleURLEndpoint {
    url: string;
    target: string;
    nofollow: boolean;
}

export interface PurpleWatchEndpoint {
    videoId: string;
    startTimeSeconds: number;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface MetadataRowContainer {
    metadataRowContainerRenderer: MetadataRowContainerRenderer;
}

export interface MetadataRowContainerRenderer {
    collapsedItemCount: number;
    trackingParams: string;
}

export interface Owner {
    videoOwnerRenderer: VideoOwnerRenderer;
}

export interface VideoOwnerRenderer {
    thumbnail: BackgroundClass;
    title: Byline;
    subscriptionButton: DismissStrategy;
    navigationEndpoint: VideoOwnerRendererNavigationEndpoint;
    subscriberCountText: ShortViewCountText;
    trackingParams: string;
}

export interface VideoOwnerRendererNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    browseEndpoint: PurpleBrowseEndpoint;
}

export interface PurpleBrowseEndpoint {
    browseId: string;
    canonicalBaseUrl: string;
}

export interface DismissStrategy {
    type: string;
}

export interface Byline {
    runs: BylineRun[];
}

export interface BylineRun {
    text: string;
    navigationEndpoint: VideoOwnerRendererNavigationEndpoint;
}

export interface ShowLessCommand {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction;
}

export interface ChangeEngagementPanelVisibilityAction {
    targetId: string;
    visibility: string;
}

export interface ShowMoreCommand {
    clickTrackingParams: string;
    commandExecutorCommand: ShowMoreCommandCommandExecutorCommand;
}

export interface ShowMoreCommandCommandExecutorCommand {
    commands: IndigoCommand[];
}

export interface IndigoCommand {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
    scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand;
}

export interface ScrollToEngagementPanelCommand {
    targetId: string;
}

export interface SubscribeButton {
    buttonRenderer: SubscribeButtonButtonRenderer;
}

export interface SubscribeButtonButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: DetailsText;
    navigationEndpoint: IndigoNavigationEndpoint;
    trackingParams: string;
    targetId: string;
}

export interface IndigoNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: DefaultNavigationEndpointCommandMetadata;
    modalEndpoint: FluffyModalEndpoint;
}

export interface FluffyModalEndpoint {
    modal: StickyModal;
}

export interface StickyModal {
    modalWithTitleAndButtonRenderer: StickyModalWithTitleAndButtonRenderer;
}

export interface StickyModalWithTitleAndButtonRenderer {
    title: TitleClass;
    content: TitleClass;
    button: TentacledButton;
}

export interface TentacledButton {
    buttonRenderer: StickyButtonRenderer;
}

export interface StickyButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: TitleClass;
    navigationEndpoint: IndecentNavigationEndpoint;
    trackingParams: string;
}

export interface IndecentNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: AutoplayVideoCommandMetadata;
    signInEndpoint: FluffySignInEndpoint;
}

export interface FluffySignInEndpoint {
    nextEndpoint: CurrentVideoEndpointClass;
    continueAction: string;
    idamTag: string;
}

export interface TwoColumnWatchNextResultsSecondaryResults {
    secondaryResults: SecondaryResultsSecondaryResults;
}

export interface SecondaryResultsSecondaryResults {
    results: SecondaryResultsResult[];
    trackingParams: string;
    targetId: string;
}

export interface SecondaryResultsResult {
    compactVideoRenderer?: CompactVideoRenderer;
    continuationItemRenderer?: ContinuationItemRenderer;
}

export interface CompactVideoRenderer {
    videoId: string;
    thumbnail: BackgroundClass;
    title: ShortViewCountText;
    longBylineText: Byline;
    publishedTimeText?: TitleClass;
    viewCountText: ViewCountText;
    lengthText?: ShortViewCountText;
    navigationEndpoint: CompactVideoRendererNavigationEndpoint;
    shortBylineText: Byline;
    channelThumbnail: BackgroundClass;
    trackingParams: string;
    shortViewCountText: Text;
    menu: Menu;
    thumbnailOverlays: CompactVideoRendererThumbnailOverlay[];
    accessibility: AccessibilityData;
    richThumbnail?: RichThumbnail;
    badges?: Badge[];
    ownerBadges?: OwnerBadge[];
}

export interface Badge {
    metadataBadgeRenderer: BadgeMetadataBadgeRenderer;
}

export interface BadgeMetadataBadgeRenderer {
    style: MetadataBadgeRendererStyle;
    label: Label;
    trackingParams: string;
}

export enum Label {
    LiveNow = "LIVE NOW",
    New = "New",
}

export enum MetadataBadgeRendererStyle {
    BadgeStyleTypeLiveNow = "BADGE_STYLE_TYPE_LIVE_NOW",
    BadgeStyleTypeSimple = "BADGE_STYLE_TYPE_SIMPLE",
}

export interface Menu {
    menuRenderer: MenuMenuRenderer;
}

export interface MenuMenuRenderer {
    items: TentacledItem[];
    trackingParams: string;
    accessibility: AccessibilityData;
    targetId?: string;
}

export interface TentacledItem {
    menuServiceItemRenderer: MenuItemRenderer;
}

export interface CompactVideoRendererNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: AutoplayVideoCommandMetadata;
    watchEndpoint: FluffyWatchEndpoint;
}

export interface FluffyWatchEndpoint {
    videoId: string;
    nofollow: boolean;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface OwnerBadge {
    metadataBadgeRenderer: OwnerBadgeMetadataBadgeRenderer;
}

export interface OwnerBadgeMetadataBadgeRenderer {
    icon: Icon;
    style: string;
    tooltip: string;
    trackingParams: string;
    accessibilityData: Accessibility;
}

export interface RichThumbnail {
    movingThumbnailRenderer: MovingThumbnailRenderer;
}

export interface MovingThumbnailRenderer {
    movingThumbnailDetails?: MovingThumbnailDetails;
    enableHoveredLogging: boolean;
    enableOverlay: boolean;
}

export interface MovingThumbnailDetails {
    thumbnails: ThumbnailElement[];
    logAsMovingThumbnail: boolean;
}

export interface Text {
    accessibility?: AccessibilityData;
    simpleText?: string;
    runs?: DetailsTextRun[];
}

export interface CompactVideoRendererThumbnailOverlay {
    thumbnailOverlayTimeStatusRenderer?: PurpleThumbnailOverlayTimeStatusRenderer;
    thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer;
    thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;
}

export interface ThumbnailOverlayNowPlayingRenderer {
    text: DetailsText;
}

export interface PurpleThumbnailOverlayTimeStatusRenderer {
    text: ShortViewCountText;
    style: ThumbnailOverlayTimeStatusRendererStyle;
}

export enum ThumbnailOverlayTimeStatusRendererStyle {
    Default = "DEFAULT",
    Live = "LIVE",
}

export interface ThumbnailOverlayToggleButtonRenderer {
    isToggled?: boolean;
    untoggledIcon: Icon;
    toggledIcon: Icon;
    untoggledTooltip: UntoggledTooltip;
    toggledTooltip: ToggledTooltip;
    untoggledServiceEndpoint: UntoggledServiceEndpoint;
    toggledServiceEndpoint?: ToggledServiceEndpoint;
    untoggledAccessibility: AccessibilityData;
    toggledAccessibility: AccessibilityData;
    trackingParams: string;
}

export interface ToggledServiceEndpoint {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    playlistEditEndpoint: ToggledServiceEndpointPlaylistEditEndpoint;
}

export interface ToggledServiceEndpointPlaylistEditEndpoint {
    playlistId: PlaylistID;
    actions: FluffyAction[];
}

export interface FluffyAction {
    action: AmbitiousAction;
    removedVideoId: string;
}

export enum AmbitiousAction {
    ActionRemoveVideoByVideoID = "ACTION_REMOVE_VIDEO_BY_VIDEO_ID",
}

export enum PlaylistID {
    Wl = "WL",
}

export enum ToggledTooltip {
    Added = "Added",
}

export interface UntoggledServiceEndpoint {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    playlistEditEndpoint?: UntoggledServiceEndpointPlaylistEditEndpoint;
    signalServiceEndpoint?: UntoggledServiceEndpointSignalServiceEndpoint;
}

export interface UntoggledServiceEndpointPlaylistEditEndpoint {
    playlistId: PlaylistID;
    actions: TentacledAction[];
}

export interface TentacledAction {
    addedVideoId: string;
    action: CunningAction;
}

export enum CunningAction {
    ActionAddVideo = "ACTION_ADD_VIDEO",
}

export interface UntoggledServiceEndpointSignalServiceEndpoint {
    signal: Signal;
    actions: StickyAction[];
}

export interface StickyAction {
    clickTrackingParams: string;
    addToPlaylistCommand: AddToPlaylistCommand;
}

export enum UntoggledTooltip {
    AddToQueue = "Add to queue",
    WatchLater = "Watch later",
}

export interface ViewCountText {
    simpleText?: string;
    runs?: DetailsTextRun[];
}

export interface ContinuationItemRenderer {
    trigger: string;
    continuationEndpoint: ContinuationEndpoint;
    button: ContinuationItemRendererButton;
}

export interface ContinuationItemRendererButton {
    buttonRenderer: IndigoButtonRenderer;
}

export interface IndigoButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: DetailsText;
    trackingParams: string;
    command: ContinuationEndpoint;
}

export interface ContinuationEndpoint {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    continuationCommand: ContinuationCommand;
}

export interface ContinuationCommand {
    token: string;
    request: string;
}

export interface EngagementPanel {
    engagementPanelSectionListRenderer: EngagementPanelSectionListRenderer;
}

export interface EngagementPanelSectionListRenderer {
    content: EngagementPanelSectionListRendererContent;
    targetId: string;
    visibility: string;
    loggingDirectives: LoggingDirectives;
    panelIdentifier?: string;
    header?: EngagementPanelSectionListRendererHeader;
    veType?: number;
}

export interface EngagementPanelSectionListRendererContent {
    adsEngagementPanelContentRenderer?: AdsEngagementPanelContentRenderer;
    structuredDescriptionContentRenderer?: StructuredDescriptionContentRenderer;
}

export interface StructuredDescriptionContentRenderer {
    items: StructuredDescriptionContentRendererItem[];
}

export interface StructuredDescriptionContentRendererItem {
    expandableVideoDescriptionBodyRenderer: ExpandableVideoDescriptionBodyRenderer;
}

export interface ExpandableVideoDescriptionBodyRenderer {
    descriptionBodyText: DescriptionBodyTextClass;
    showMoreText: TitleClass;
    showLessText: TitleClass;
}

export interface EngagementPanelSectionListRendererHeader {
    engagementPanelTitleHeaderRenderer: EngagementPanelTitleHeaderRenderer;
}

export interface EngagementPanelTitleHeaderRenderer {
    title: TitleClass;
    visibilityButton: VisibilityButton;
    trackingParams: string;
}

export interface VisibilityButton {
    buttonRenderer: VisibilityButtonButtonRenderer;
}

export interface VisibilityButtonButtonRenderer {
    icon: Icon;
    trackingParams: string;
    accessibilityData: AccessibilityData;
    command: IndecentCommand;
}

export interface IndecentCommand {
    clickTrackingParams: string;
    commandExecutorCommand: TentacledCommandExecutorCommand;
}

export interface TentacledCommandExecutorCommand {
    commands: HilariousCommand[];
}

export interface HilariousCommand {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
    updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand;
}

export interface UpdateToggleButtonStateCommand {
    toggled: boolean;
    buttonId: string;
}

export interface ResponseFrameworkUpdates {
    entityBatchUpdate: FluffyEntityBatchUpdate;
}

export interface FluffyEntityBatchUpdate {
    mutations: FluffyMutation[];
    timestamp: Timestamp;
}

export interface FluffyMutation {
    entityKey: string;
    type: string;
    options: Options;
}

export interface Options {
    persistenceOption: string;
}

export interface OnResponseReceivedEndpoint {
    clickTrackingParams: string;
    commandMetadata: OnResponseReceivedEndpointCommandMetadata;
    signalServiceEndpoint: OnResponseReceivedEndpointSignalServiceEndpoint;
}

export interface OnResponseReceivedEndpointSignalServiceEndpoint {
    signal: Signal;
    actions: IndigoAction[];
}

export interface IndigoAction {
    clickTrackingParams: string;
    signalAction: SignalAction;
}

export interface SignalAction {
    signal: string;
}

export interface Overlay {
    tooltipRenderer: TooltipRenderer;
}

export interface TooltipRenderer {
    promoConfig: PromoConfig;
    targetId: string;
    text: DetailsText;
    detailsText: DetailsText;
    dismissButton: DismissButton;
    suggestedPosition: DismissStrategy;
    dismissStrategy: DismissStrategy;
    dwellTimeMs: string;
    trackingParams: string;
}

export interface PromoConfig {
    promoId: string;
    impressionEndpoints: AcceptCommand[];
    acceptCommand: AcceptCommand;
    dismissCommand: AcceptCommand;
}

export interface PlayerOverlays {
    playerOverlayRenderer: PlayerOverlayRenderer;
}

export interface PlayerOverlayRenderer {
    endScreen: EndScreen;
    autoplay: PlayerOverlayRendererAutoplay;
    shareButton: ShareButtonClass;
    addToMenu: AddToMenu;
    videoDetails: PlayerOverlayRendererVideoDetails;
    decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer;
}

export interface AddToMenu {
    menuRenderer: AddToMenuMenuRenderer;
}

export interface AddToMenuMenuRenderer {
    trackingParams: string;
}

export interface PlayerOverlayRendererAutoplay {
    playerOverlayAutoplayRenderer: PlayerOverlayAutoplayRenderer;
}

export interface PlayerOverlayAutoplayRenderer {
    title: TitleClass;
    videoTitle: ShortViewCountText;
    byline: Byline;
    pauseText: TitleClass;
    background: BackgroundClass;
    countDownSecs: number;
    cancelButton: CancelButton;
    nextButton: CloseButtonClass;
    trackingParams: string;
    closeButton: CloseButtonClass;
    thumbnailOverlays: PlayerOverlayAutoplayRendererThumbnailOverlay[];
    preferImmediateRedirect: boolean;
    videoId: string;
    publishedTimeText: TitleClass;
    webShowNewAutonavCountdown: boolean;
    webShowBigThumbnailEndscreen: boolean;
    shortViewCountText: ShortViewCountText;
    countDownSecsForFullscreen: number;
}

export interface CancelButton {
    buttonRenderer: CancelButtonButtonRenderer;
}

export interface CancelButtonButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: TitleClass;
    accessibility: Accessibility;
    trackingParams: string;
    command: AmbitiousCommand;
}

export interface AmbitiousCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    getSurveyCommand: GetSurveyCommand;
}

export interface GetSurveyCommand {
    endpoint: GetSurveyCommandEndpoint;
    action: string;
}

export interface GetSurveyCommandEndpoint {
    watch: AdsEngagementPanelContentRenderer;
}

export interface PlayerOverlayAutoplayRendererThumbnailOverlay {
    thumbnailOverlayTimeStatusRenderer: PurpleThumbnailOverlayTimeStatusRenderer;
}

export interface DecoratedPlayerBarRenderer {
    decoratedPlayerBarRenderer: Media;
}

export interface Media {
}

export interface EndScreen {
    watchNextEndScreenRenderer: WatchNextEndScreenRenderer;
}

export interface WatchNextEndScreenRenderer {
    results: WatchNextEndScreenRendererResult[];
    title: TitleClass;
    trackingParams: string;
}

export interface WatchNextEndScreenRendererResult {
    endScreenVideoRenderer: EndScreenVideoRenderer;
}

export interface EndScreenVideoRenderer {
    videoId: string;
    thumbnail: BackgroundClass;
    title: ShortViewCountText;
    shortBylineText: Byline;
    lengthText?: ShortViewCountText;
    lengthInSeconds?: number;
    navigationEndpoint: CurrentVideoEndpointClass;
    trackingParams: string;
    shortViewCountText: Text;
    publishedTimeText: TitleClass;
    thumbnailOverlays: EndScreenVideoRendererThumbnailOverlay[];
}

export interface EndScreenVideoRendererThumbnailOverlay {
    thumbnailOverlayTimeStatusRenderer?: FluffyThumbnailOverlayTimeStatusRenderer;
    thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;
}

export interface FluffyThumbnailOverlayTimeStatusRenderer {
    text: Text;
    style: ThumbnailOverlayTimeStatusRendererStyle;
    icon?: Icon;
}

export interface ShareButtonClass {
    buttonRenderer: ShareButtonButtonRenderer;
}

export interface ShareButtonButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    icon: Icon;
    navigationEndpoint?: ServiceEndpointClass;
    tooltip: string;
    trackingParams: string;
    serviceEndpoint?: ButtonRendererServiceEndpoint;
    accessibilityData?: AccessibilityData;
}

export interface ButtonRendererServiceEndpoint {
    clickTrackingParams: string;
    commandMetadata: OnResponseReceivedEndpointCommandMetadata;
    signalServiceEndpoint: FluffySignalServiceEndpoint;
}

export interface FluffySignalServiceEndpoint {
    signal: Signal;
    actions: IndecentAction[];
}

export interface IndecentAction {
    clickTrackingParams: string;
    openPopupAction: FluffyOpenPopupAction;
}

export interface FluffyOpenPopupAction {
    popup: TentacledPopup;
    popupType: string;
}

export interface TentacledPopup {
    voiceSearchDialogRenderer: VoiceSearchDialogRenderer;
}

export interface VoiceSearchDialogRenderer {
    placeholderHeader: DetailsText;
    promptHeader: DetailsText;
    exampleQuery1: DetailsText;
    exampleQuery2: DetailsText;
    promptMicrophoneLabel: DetailsText;
    loadingHeader: DetailsText;
    connectionErrorHeader: DetailsText;
    connectionErrorMicrophoneLabel: DetailsText;
    permissionsHeader: DetailsText;
    permissionsSubtext: DetailsText;
    disabledHeader: DetailsText;
    disabledSubtext: DetailsText;
    microphoneButtonAriaLabel: DetailsText;
    exitButton: CloseButtonClass;
    trackingParams: string;
    microphoneOffPromptHeader: DetailsText;
}

export interface PlayerOverlayRendererVideoDetails {
    playerOverlayVideoDetailsRenderer: PlayerOverlayVideoDetailsRenderer;
}

export interface PlayerOverlayVideoDetailsRenderer {
    title: TitleClass;
    subtitle: DetailsText;
}

export interface ResponseResponseContext {
    serviceTrackingParams: ServiceTrackingParam[];
    mainAppWebResponseContext: MainAppWebResponseContext;
    webResponseContextExtensionData: FluffyWebResponseContextExtensionData;
}

export interface FluffyWebResponseContextExtensionData {
    ytConfigData: YtConfigData;
    webPrefetchData: WebPrefetchData;
    hasDecorated: boolean;
}

export interface WebPrefetchData {
    navigationEndpoints: NavigationEndpoint[];
}

export interface YtConfigData {
    visitorData: string;
    rootVisualElementType: number;
}

export interface Topbar {
    desktopTopbarRenderer: DesktopTopbarRenderer;
}

export interface DesktopTopbarRenderer {
    logo: Logo;
    searchbox: Searchbox;
    trackingParams: string;
    topbarButtons: TopbarButton[];
    hotkeyDialog: HotkeyDialog;
    backButton: BackButtonClass;
    forwardButton: BackButtonClass;
    a11ySkipNavigationButton: A11YSkipNavigationButton;
    voiceSearchButton: ShareButtonClass;
}

export interface A11YSkipNavigationButton {
    buttonRenderer: A11YSkipNavigationButtonButtonRenderer;
}

export interface A11YSkipNavigationButtonButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: DetailsText;
    trackingParams: string;
    command: OnResponseReceivedEndpoint;
}

export interface BackButtonClass {
    buttonRenderer: BackButtonButtonRenderer;
}

export interface BackButtonButtonRenderer {
    trackingParams: string;
    command: OnResponseReceivedEndpoint;
}

export interface HotkeyDialog {
    hotkeyDialogRenderer: HotkeyDialogRenderer;
}

export interface HotkeyDialogRenderer {
    title: DetailsText;
    sections: HotkeyDialogRendererSection[];
    dismissButton: ActionButtonClass;
    trackingParams: string;
}

export interface HotkeyDialogRendererSection {
    hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer;
}

export interface HotkeyDialogSectionRenderer {
    title: DetailsText;
    options: Option[];
}

export interface Option {
    hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer;
}

export interface HotkeyDialogSectionOptionRenderer {
    label: DetailsText;
    hotkey: string;
    hotkeyAccessibilityLabel?: AccessibilityData;
}

export interface Logo {
    topbarLogoRenderer: TopbarLogoRenderer;
}

export interface TopbarLogoRenderer {
    iconImage: Icon;
    tooltipText: DetailsText;
    endpoint: TopbarLogoRendererEndpoint;
    trackingParams: string;
    overrideEntityKey: string;
}

export interface TopbarLogoRendererEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    browseEndpoint: EndpointBrowseEndpoint;
}

export interface EndpointBrowseEndpoint {
    browseId: string;
}

export interface Searchbox {
    fusionSearchboxRenderer: FusionSearchboxRenderer;
}

export interface FusionSearchboxRenderer {
    icon: Icon;
    placeholderText: DetailsText;
    config: Config;
    trackingParams: string;
    searchEndpoint: FusionSearchboxRendererSearchEndpoint;
    clearButton: CloseButtonClass;
}

export interface Config {
    webSearchboxConfig: WebSearchboxConfig;
}

export interface WebSearchboxConfig {
    requestLanguage: string;
    requestDomain: string;
    hasOnscreenKeyboard: boolean;
    focusSearchbox: boolean;
}

export interface FusionSearchboxRendererSearchEndpoint {
    clickTrackingParams: string;
    commandMetadata: AutoplayVideoCommandMetadata;
    searchEndpoint: SearchEndpointSearchEndpoint;
}

export interface SearchEndpointSearchEndpoint {
    query: string;
}

export interface TopbarButton {
    topbarMenuButtonRenderer?: TopbarMenuButtonRenderer;
    buttonRenderer?: TopbarButtonButtonRenderer;
}

export interface TopbarButtonButtonRenderer {
    style: string;
    size: string;
    text: DetailsText;
    icon: Icon;
    navigationEndpoint: HilariousNavigationEndpoint;
    trackingParams: string;
    targetId: string;
}

export interface HilariousNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: AutoplayVideoCommandMetadata;
    signInEndpoint: TentacledSignInEndpoint;
}

export interface TentacledSignInEndpoint {
    idamTag: string;
}

export interface TopbarMenuButtonRenderer {
    icon: Icon;
    menuRenderer?: TopbarMenuButtonRendererMenuRenderer;
    trackingParams: string;
    accessibility: AccessibilityData;
    tooltip: string;
    style: string;
    targetId?: string;
    menuRequest?: MenuRequest;
}

export interface TopbarMenuButtonRendererMenuRenderer {
    multiPageMenuRenderer: MenuRendererMultiPageMenuRenderer;
}

export interface MenuRendererMultiPageMenuRenderer {
    sections: MultiPageMenuRendererSection[];
    trackingParams: string;
    style: string;
}

export interface MultiPageMenuRendererSection {
    multiPageMenuSectionRenderer: MultiPageMenuSectionRenderer;
}

export interface MultiPageMenuSectionRenderer {
    items: MultiPageMenuSectionRendererItem[];
    trackingParams: string;
}

export interface MultiPageMenuSectionRendererItem {
    compactLinkRenderer: CompactLinkRenderer;
}

export interface CompactLinkRenderer {
    icon: Icon;
    title: DetailsText;
    navigationEndpoint: CompactLinkRendererNavigationEndpoint;
    trackingParams: string;
}

export interface CompactLinkRendererNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: AutoplayVideoCommandMetadata;
    urlEndpoint: FluffyURLEndpoint;
}

export interface FluffyURLEndpoint {
    url: string;
    target: string;
}

export interface MenuRequest {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    signalServiceEndpoint: MenuRequestSignalServiceEndpoint;
}

export interface MenuRequestSignalServiceEndpoint {
    signal: string;
    actions: HilariousAction[];
}

export interface HilariousAction {
    clickTrackingParams: string;
    openPopupAction: TentacledOpenPopupAction;
}

export interface TentacledOpenPopupAction {
    popup: StickyPopup;
    popupType: string;
    beReused: boolean;
}

export interface StickyPopup {
    multiPageMenuRenderer: PopupMultiPageMenuRenderer;
}

export interface PopupMultiPageMenuRenderer {
    trackingParams: string;
    style: string;
    showLoadingSpinner: boolean;
}

export interface YtVidMetadataVideoDetails {
    embed: Embed;
    title: string;
    description: string;
    lengthSeconds: string;
    ownerProfileUrl: string;
    externalChannelId: string;
    isFamilySafe: boolean;
    availableCountries: string[];
    isUnlisted: boolean;
    hasYpcMetadata: boolean;
    viewCount: string;
    category: string;
    publishDate: Date;
    ownerChannelName: string;
    liveBroadcastDetails: LiveBroadcastDetails;
    uploadDate: Date;
    videoId: string;
    keywords: string[];
    channelId: string;
    isOwnerViewing: boolean;
    isCrawlable: boolean;
    isUpcoming: boolean;
    allowRatings: boolean;
    author: Author;
    isLowLatencyLiveStream: boolean;
    isPrivate: boolean;
    isUnpluggedCorpus: boolean;
    latencyClass: string;
    isLiveContent: boolean;
    media: Media;
    likes: null;
    dislikes: null;
    age_restricted: boolean;
    video_url: string;
    storyboards: any[];
    chapters: any[];
    thumbnails: ThumbnailElement[];
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toYtVidMetadata(json: string): YtVidMetadata {
    return cast(JSON.parse(json), r("YtVidMetadata"));
  }

  public static ytVidMetadataToJson(value: YtVidMetadata): string {
    return JSON.stringify(uncast(value, r("YtVidMetadata")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ""): never {
  if (key) {
    throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => map[p.json] = {key: p.js, typ: p.typ});
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => map[p.js] = {key: p.json, typ: p.typ});
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ""): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {
        console.log("Error in transformUnion");
      }
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue("array", val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue("Date", val);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val) :
            typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val) :
            typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val) :
            invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return {arrayItems: typ};
}

function u(...typs: any[]) {
  return {unionMembers: typs};
}

function o(props: any[], additional: any) {
  return {props, additional};
}

// function m(additional: any) {
//   return {props: [], additional};
// }

function r(name: string) {
  return {ref: name};
}

const typeMap: any = {
  "YtVidMetadata": o([
    {json: "page", js: "page", typ: ""},
    {json: "player_response", js: "player_response", typ: r("PlayerResponse")},
    {json: "response", js: "response", typ: r("Response")},
    {json: "html5player", js: "html5player", typ: ""},
    {json: "formats", js: "formats", typ: a("any")},
    {json: "related_videos", js: "related_videos", typ: a(r("RelatedVideo"))},
    {json: "videoDetails", js: "videoDetails", typ: r("YtVidMetadataVideoDetails")},
  ], false),
  "PlayerResponse": o([
    {json: "responseContext", js: "responseContext", typ: r("PlayerResponseResponseContext")},
    {json: "playabilityStatus", js: "playabilityStatus", typ: r("PlayabilityStatus")},
    {json: "heartbeatParams", js: "heartbeatParams", typ: r("HeartbeatParams")},
    {json: "videoDetails", js: "videoDetails", typ: r("PlayerResponseVideoDetails")},
    {json: "microformat", js: "microformat", typ: r("Microformat")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "attestation", js: "attestation", typ: r("Attestation")},
    {json: "messages", js: "messages", typ: a(r("Message"))},
    {json: "frameworkUpdates", js: "frameworkUpdates", typ: r("PlayerResponseFrameworkUpdates")},
  ], false),
  "Attestation": o([
    {json: "playerAttestationRenderer", js: "playerAttestationRenderer", typ: r("PlayerAttestationRenderer")},
  ], false),
  "PlayerAttestationRenderer": o([
    {json: "challenge", js: "challenge", typ: ""},
    {json: "botguardData", js: "botguardData", typ: r("BotguardData")},
  ], false),
  "BotguardData": o([
    {json: "program", js: "program", typ: ""},
    {json: "interpreterSafeUrl", js: "interpreterSafeUrl", typ: r("InterpreterSafeURL")},
    {json: "serverEnvironment", js: "serverEnvironment", typ: 0},
  ], false),
  "InterpreterSafeURL": o([
    {json: "privateDoNotAccessOrElseTrustedResourceUrlWrappedValue", js: "privateDoNotAccessOrElseTrustedResourceUrlWrappedValue", typ: ""},
  ], false),
  "PlayerResponseFrameworkUpdates": o([
    {json: "entityBatchUpdate", js: "entityBatchUpdate", typ: r("PurpleEntityBatchUpdate")},
  ], false),
  "PurpleEntityBatchUpdate": o([
    {json: "mutations", js: "mutations", typ: a(r("PurpleMutation"))},
    {json: "timestamp", js: "timestamp", typ: r("Timestamp")},
  ], false),
  "PurpleMutation": o([
    {json: "entityKey", js: "entityKey", typ: ""},
    {json: "type", js: "type", typ: ""},
    {json: "payload", js: "payload", typ: r("Payload")},
  ], false),
  "Payload": o([
    {json: "offlineabilityEntity", js: "offlineabilityEntity", typ: r("OfflineabilityEntity")},
  ], false),
  "OfflineabilityEntity": o([
    {json: "key", js: "key", typ: ""},
    {json: "addToOfflineButtonState", js: "addToOfflineButtonState", typ: ""},
  ], false),
  "Timestamp": o([
    {json: "seconds", js: "seconds", typ: ""},
    {json: "nanos", js: "nanos", typ: 0},
  ], false),
  "HeartbeatParams": o([
    {json: "softFailOnError", js: "softFailOnError", typ: true},
    {json: "heartbeatServerData", js: "heartbeatServerData", typ: ""},
    {json: "heartbeatAttestationConfig", js: "heartbeatAttestationConfig", typ: r("HeartbeatAttestationConfig")},
  ], false),
  "HeartbeatAttestationConfig": o([
    {json: "requiresAttestation", js: "requiresAttestation", typ: true},
  ], false),
  "Message": o([
    {json: "mealbarPromoRenderer", js: "mealbarPromoRenderer", typ: r("MealbarPromoRenderer")},
  ], false),
  "MealbarPromoRenderer": o([
    {json: "messageTexts", js: "messageTexts", typ: a(r("DetailsText"))},
    {json: "actionButton", js: "actionButton", typ: r("ActionButtonClass")},
    {json: "dismissButton", js: "dismissButton", typ: r("DismissButton")},
    {json: "triggerCondition", js: "triggerCondition", typ: ""},
    {json: "style", js: "style", typ: ""},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "impressionEndpoints", js: "impressionEndpoints", typ: a(r("AcceptCommand"))},
    {json: "isVisible", js: "isVisible", typ: true},
    {json: "messageTitle", js: "messageTitle", typ: r("DetailsText")},
  ], false),
  "ActionButtonClass": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("ActionButtonButtonRenderer")},
  ], false),
  "ActionButtonButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "text", js: "text", typ: r("DetailsText")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "command", js: "command", typ: u(undefined, r("PurpleCommand"))},
    {json: "isDisabled", js: "isDisabled", typ: u(undefined, true)},
  ], false),
  "PurpleCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandExecutorCommand", js: "commandExecutorCommand", typ: r("PurpleCommandExecutorCommand")},
  ], false),
  "PurpleCommandExecutorCommand": o([
    {json: "commands", js: "commands", typ: a(r("FluffyCommand"))},
  ], false),
  "FluffyCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: u(undefined, "")},
    {json: "commandMetadata", js: "commandMetadata", typ: r("PurpleCommandMetadata")},
    {json: "browseEndpoint", js: "browseEndpoint", typ: u(undefined, r("CommandBrowseEndpoint"))},
    {json: "feedbackEndpoint", js: "feedbackEndpoint", typ: u(undefined, r("FeedbackEndpoint"))},
  ], false),
  "CommandBrowseEndpoint": o([
    {json: "browseId", js: "browseId", typ: r("BrowseID")},
    {json: "params", js: "params", typ: ""},
  ], false),
  "PurpleCommandMetadata": o([
    {json: "webCommandMetadata", js: "webCommandMetadata", typ: r("PurpleWebCommandMetadata")},
  ], false),
  "PurpleWebCommandMetadata": o([
    {json: "url", js: "url", typ: u(undefined, "")},
    {json: "webPageType", js: "webPageType", typ: u(undefined, r("WebPageType"))},
    {json: "rootVe", js: "rootVe", typ: u(undefined, 0)},
    {json: "apiUrl", js: "apiUrl", typ: u(undefined, r("PurpleAPIURL"))},
    {json: "sendPost", js: "sendPost", typ: u(undefined, true)},
  ], false),
  "FeedbackEndpoint": o([
    {json: "feedbackToken", js: "feedbackToken", typ: ""},
    {json: "uiActions", js: "uiActions", typ: r("UIActions")},
  ], false),
  "UIActions": o([
    {json: "hideEnclosingContainer", js: "hideEnclosingContainer", typ: true},
  ], false),
  "DetailsText": o([
    {json: "runs", js: "runs", typ: a(r("DetailsTextRun"))},
  ], false),
  "DetailsTextRun": o([
    {json: "text", js: "text", typ: ""},
  ], false),
  "DismissButton": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("PurpleButtonRenderer")},
  ], false),
  "PurpleButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "text", js: "text", typ: r("DetailsText")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "command", js: "command", typ: r("TentacledCommand")},
  ], false),
  "TentacledCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandExecutorCommand", js: "commandExecutorCommand", typ: r("FluffyCommandExecutorCommand")},
  ], false),
  "FluffyCommandExecutorCommand": o([
    {json: "commands", js: "commands", typ: a(r("AcceptCommand"))},
  ], false),
  "AcceptCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AcceptCommandCommandMetadata")},
    {json: "feedbackEndpoint", js: "feedbackEndpoint", typ: r("FeedbackEndpoint")},
  ], false),
  "AcceptCommandCommandMetadata": o([
    {json: "webCommandMetadata", js: "webCommandMetadata", typ: r("FluffyWebCommandMetadata")},
  ], false),
  "FluffyWebCommandMetadata": o([
    {json: "sendPost", js: "sendPost", typ: true},
    {json: "apiUrl", js: "apiUrl", typ: u(undefined, r("FluffyAPIURL"))},
  ], false),
  "Microformat": o([
    {json: "playerMicroformatRenderer", js: "playerMicroformatRenderer", typ: r("PlayerMicroformatRenderer")},
  ], false),
  "PlayerMicroformatRenderer": o([
    {json: "thumbnail", js: "thumbnail", typ: r("BackgroundClass")},
    {json: "embed", js: "embed", typ: r("Embed")},
    {json: "title", js: "title", typ: r("TitleClass")},
    {json: "description", js: "description", typ: r("TitleClass")},
    {json: "lengthSeconds", js: "lengthSeconds", typ: ""},
    {json: "ownerProfileUrl", js: "ownerProfileUrl", typ: ""},
    {json: "externalChannelId", js: "externalChannelId", typ: ""},
    {json: "isFamilySafe", js: "isFamilySafe", typ: true},
    {json: "availableCountries", js: "availableCountries", typ: a("")},
    {json: "isUnlisted", js: "isUnlisted", typ: true},
    {json: "hasYpcMetadata", js: "hasYpcMetadata", typ: true},
    {json: "viewCount", js: "viewCount", typ: ""},
    {json: "category", js: "category", typ: ""},
    {json: "publishDate", js: "publishDate", typ: Date},
    {json: "ownerChannelName", js: "ownerChannelName", typ: ""},
    {json: "liveBroadcastDetails", js: "liveBroadcastDetails", typ: r("LiveBroadcastDetails")},
    {json: "uploadDate", js: "uploadDate", typ: Date},
  ], false),
  "TitleClass": o([
    {json: "simpleText", js: "simpleText", typ: ""},
  ], false),
  "Embed": o([
    {json: "iframeUrl", js: "iframeUrl", typ: ""},
    {json: "flashUrl", js: "flashUrl", typ: ""},
    {json: "width", js: "width", typ: 0},
    {json: "height", js: "height", typ: 0},
    {json: "flashSecureUrl", js: "flashSecureUrl", typ: ""},
  ], false),
  "LiveBroadcastDetails": o([
    {json: "isLiveNow", js: "isLiveNow", typ: true},
    {json: "startTimestamp", js: "startTimestamp", typ: Date},
  ], false),
  "BackgroundClass": o([
    {json: "thumbnails", js: "thumbnails", typ: a(r("ThumbnailElement"))},
  ], false),
  "ThumbnailElement": o([
    {json: "url", js: "url", typ: ""},
    {json: "width", js: "width", typ: 0},
    {json: "height", js: "height", typ: 0},
  ], false),
  "PlayabilityStatus": o([
    {json: "status", js: "status", typ: ""},
    {json: "reason", js: "reason", typ: ""},
    {json: "playableInEmbed", js: "playableInEmbed", typ: true},
    {json: "liveStreamability", js: "liveStreamability", typ: r("LiveStreamability")},
    {json: "miniplayer", js: "miniplayer", typ: r("Miniplayer")},
    {json: "contextParams", js: "contextParams", typ: ""},
  ], false),
  "LiveStreamability": o([
    {json: "liveStreamabilityRenderer", js: "liveStreamabilityRenderer", typ: r("LiveStreamabilityRenderer")},
  ], false),
  "LiveStreamabilityRenderer": o([
    {json: "videoId", js: "videoId", typ: ""},
    {json: "offlineSlate", js: "offlineSlate", typ: r("OfflineSlate")},
    {json: "pollDelayMs", js: "pollDelayMs", typ: ""},
  ], false),
  "OfflineSlate": o([
    {json: "liveStreamOfflineSlateRenderer", js: "liveStreamOfflineSlateRenderer", typ: r("LiveStreamOfflineSlateRenderer")},
  ], false),
  "LiveStreamOfflineSlateRenderer": o([
    {json: "scheduledStartTime", js: "scheduledStartTime", typ: ""},
    {json: "mainText", js: "mainText", typ: r("DetailsText")},
    {json: "subtitleText", js: "subtitleText", typ: r("TitleClass")},
    {json: "thumbnail", js: "thumbnail", typ: r("BackgroundClass")},
    {json: "offlineSlateStyle", js: "offlineSlateStyle", typ: ""},
  ], false),
  "Miniplayer": o([
    {json: "miniplayerRenderer", js: "miniplayerRenderer", typ: r("MiniplayerRenderer")},
  ], false),
  "MiniplayerRenderer": o([
    {json: "playbackMode", js: "playbackMode", typ: ""},
  ], false),
  "PlayerResponseResponseContext": o([
    {json: "serviceTrackingParams", js: "serviceTrackingParams", typ: a(r("ServiceTrackingParam"))},
    {json: "mainAppWebResponseContext", js: "mainAppWebResponseContext", typ: r("MainAppWebResponseContext")},
    {json: "webResponseContextExtensionData", js: "webResponseContextExtensionData", typ: r("PurpleWebResponseContextExtensionData")},
  ], false),
  "MainAppWebResponseContext": o([
    {json: "loggedOut", js: "loggedOut", typ: true},
  ], false),
  "ServiceTrackingParam": o([
    {json: "service", js: "service", typ: ""},
    {json: "params", js: "params", typ: a(r("Param"))},
  ], false),
  "Param": o([
    {json: "key", js: "key", typ: ""},
    {json: "value", js: "value", typ: ""},
  ], false),
  "PurpleWebResponseContextExtensionData": o([
    {json: "hasDecorated", js: "hasDecorated", typ: true},
  ], false),
  "PlayerResponseVideoDetails": o([
    {json: "videoId", js: "videoId", typ: ""},
    {json: "title", js: "title", typ: ""},
    {json: "lengthSeconds", js: "lengthSeconds", typ: ""},
    {json: "keywords", js: "keywords", typ: a("")},
    {json: "channelId", js: "channelId", typ: ""},
    {json: "isOwnerViewing", js: "isOwnerViewing", typ: true},
    {json: "shortDescription", js: "shortDescription", typ: ""},
    {json: "isCrawlable", js: "isCrawlable", typ: true},
    {json: "thumbnail", js: "thumbnail", typ: r("BackgroundClass")},
    {json: "isUpcoming", js: "isUpcoming", typ: true},
    {json: "allowRatings", js: "allowRatings", typ: true},
    {json: "viewCount", js: "viewCount", typ: ""},
    {json: "author", js: "author", typ: ""},
    {json: "isLowLatencyLiveStream", js: "isLowLatencyLiveStream", typ: true},
    {json: "isPrivate", js: "isPrivate", typ: true},
    {json: "isUnpluggedCorpus", js: "isUnpluggedCorpus", typ: true},
    {json: "latencyClass", js: "latencyClass", typ: ""},
    {json: "isLiveContent", js: "isLiveContent", typ: true},
  ], false),
  "RelatedVideo": o([
    {json: "id", js: "id", typ: ""},
    {json: "title", js: "title", typ: ""},
    {json: "published", js: "published", typ: ""},
    {json: "author", js: "author", typ: r("Author")},
    {json: "short_view_count_text", js: "short_view_count_text", typ: ""},
    {json: "view_count", js: "view_count", typ: ""},
    {json: "length_seconds", js: "length_seconds", typ: 0},
    {json: "thumbnails", js: "thumbnails", typ: a(r("ThumbnailElement"))},
    {json: "richThumbnails", js: "richThumbnails", typ: a(r("ThumbnailElement"))},
    {json: "isLive", js: "isLive", typ: true},
  ], false),
  "Author": o([
    {json: "id", js: "id", typ: ""},
    {json: "name", js: "name", typ: ""},
    {json: "user", js: "user", typ: ""},
    {json: "channel_url", js: "channel_url", typ: ""},
    {json: "user_url", js: "user_url", typ: ""},
    {json: "thumbnails", js: "thumbnails", typ: a(r("ThumbnailElement"))},
    {json: "verified", js: "verified", typ: true},
    {json: "external_channel_url", js: "external_channel_url", typ: u(undefined, "")},
    {json: "subscriber_count", js: "subscriber_count", typ: u(undefined, 0)},
  ], false),
  "Response": o([
    {json: "responseContext", js: "responseContext", typ: r("ResponseResponseContext")},
    {json: "contents", js: "contents", typ: r("Contents")},
    {json: "currentVideoEndpoint", js: "currentVideoEndpoint", typ: r("CurrentVideoEndpointClass")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "playerOverlays", js: "playerOverlays", typ: r("PlayerOverlays")},
    {json: "overlay", js: "overlay", typ: r("Overlay")},
    {json: "onResponseReceivedEndpoints", js: "onResponseReceivedEndpoints", typ: a(r("OnResponseReceivedEndpoint"))},
    {json: "engagementPanels", js: "engagementPanels", typ: a(r("EngagementPanel"))},
    {json: "topbar", js: "topbar", typ: r("Topbar")},
    {json: "frameworkUpdates", js: "frameworkUpdates", typ: r("ResponseFrameworkUpdates")},
  ], false),
  "Contents": o([
    {json: "twoColumnWatchNextResults", js: "twoColumnWatchNextResults", typ: r("TwoColumnWatchNextResults")},
  ], false),
  "TwoColumnWatchNextResults": o([
    {json: "results", js: "results", typ: r("TwoColumnWatchNextResultsResults")},
    {json: "secondaryResults", js: "secondaryResults", typ: r("TwoColumnWatchNextResultsSecondaryResults")},
    {json: "autoplay", js: "autoplay", typ: r("TwoColumnWatchNextResultsAutoplay")},
    {json: "conversationBar", js: "conversationBar", typ: r("ConversationBar")},
  ], false),
  "TwoColumnWatchNextResultsAutoplay": o([
    {json: "autoplay", js: "autoplay", typ: r("AutoplayAutoplay")},
  ], false),
  "AutoplayAutoplay": o([
    {json: "sets", js: "sets", typ: a(r("Set"))},
    {json: "countDownSecs", js: "countDownSecs", typ: 0},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "Set": o([
    {json: "mode", js: "mode", typ: ""},
    {json: "autoplayVideo", js: "autoplayVideo", typ: r("NavigationEndpoint")},
  ], false),
  "NavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AutoplayVideoCommandMetadata")},
    {json: "watchEndpoint", js: "watchEndpoint", typ: r("AutoplayVideoWatchEndpoint")},
  ], false),
  "AutoplayVideoCommandMetadata": o([
    {json: "webCommandMetadata", js: "webCommandMetadata", typ: r("TentacledWebCommandMetadata")},
  ], false),
  "TentacledWebCommandMetadata": o([
    {json: "url", js: "url", typ: ""},
    {json: "webPageType", js: "webPageType", typ: r("WebPageType")},
    {json: "rootVe", js: "rootVe", typ: 0},
  ], false),
  "AutoplayVideoWatchEndpoint": o([
    {json: "videoId", js: "videoId", typ: ""},
    {json: "params", js: "params", typ: ""},
    {json: "playerParams", js: "playerParams", typ: ""},
    {json: "watchEndpointSupportedPrefetchConfig", js: "watchEndpointSupportedPrefetchConfig", typ: r("WatchEndpointSupportedPrefetchConfig")},
  ], false),
  "WatchEndpointSupportedPrefetchConfig": o([
    {json: "prefetchHintConfig", js: "prefetchHintConfig", typ: r("PrefetchHintConfig")},
  ], false),
  "PrefetchHintConfig": o([
    {json: "prefetchPriority", js: "prefetchPriority", typ: 0},
    {json: "countdownUiRelativeSecondsPrefetchCondition", js: "countdownUiRelativeSecondsPrefetchCondition", typ: 0},
  ], false),
  "ConversationBar": o([
    {json: "liveChatRenderer", js: "liveChatRenderer", typ: r("LiveChatRenderer")},
  ], false),
  "LiveChatRenderer": o([
    {json: "continuations", js: "continuations", typ: a(r("Continuation"))},
    {json: "header", js: "header", typ: r("LiveChatRendererHeader")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "clientMessages", js: "clientMessages", typ: r("ClientMessages")},
    {json: "initialDisplayState", js: "initialDisplayState", typ: ""},
    {json: "showHideButton", js: "showHideButton", typ: r("ShowHideButton")},
  ], false),
  "ClientMessages": o([
    {json: "reconnectMessage", js: "reconnectMessage", typ: r("DetailsText")},
    {json: "unableToReconnectMessage", js: "unableToReconnectMessage", typ: r("DetailsText")},
    {json: "fatalError", js: "fatalError", typ: r("DetailsText")},
    {json: "reconnectedMessage", js: "reconnectedMessage", typ: r("DetailsText")},
    {json: "genericError", js: "genericError", typ: r("DetailsText")},
  ], false),
  "Continuation": o([
    {json: "reloadContinuationData", js: "reloadContinuationData", typ: r("ReloadContinuationData")},
  ], false),
  "ReloadContinuationData": o([
    {json: "continuation", js: "continuation", typ: ""},
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
  ], false),
  "LiveChatRendererHeader": o([
    {json: "liveChatHeaderRenderer", js: "liveChatHeaderRenderer", typ: r("LiveChatHeaderRenderer")},
  ], false),
  "LiveChatHeaderRenderer": o([
    {json: "overflowMenu", js: "overflowMenu", typ: r("OverflowMenu")},
    {json: "collapseButton", js: "collapseButton", typ: r("CloseButtonClass")},
    {json: "viewSelector", js: "viewSelector", typ: r("ViewSelector")},
  ], false),
  "CloseButtonClass": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("CloseButtonButtonRenderer")},
  ], false),
  "CloseButtonButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "isDisabled", js: "isDisabled", typ: true},
    {json: "accessibility", js: "accessibility", typ: u(undefined, r("Accessibility"))},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "icon", js: "icon", typ: u(undefined, r("Icon"))},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: u(undefined, r("CurrentVideoEndpointClass"))},
    {json: "accessibilityData", js: "accessibilityData", typ: u(undefined, r("AccessibilityData"))},
  ], false),
  "Accessibility": o([
    {json: "label", js: "label", typ: ""},
  ], false),
  "AccessibilityData": o([
    {json: "accessibilityData", js: "accessibilityData", typ: r("Accessibility")},
  ], false),
  "Icon": o([
    {json: "iconType", js: "iconType", typ: ""},
  ], false),
  "CurrentVideoEndpointClass": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AutoplayVideoCommandMetadata")},
    {json: "watchEndpoint", js: "watchEndpoint", typ: r("CurrentVideoEndpointWatchEndpoint")},
  ], false),
  "CurrentVideoEndpointWatchEndpoint": o([
    {json: "videoId", js: "videoId", typ: ""},
    {json: "watchEndpointSupportedOnesieConfig", js: "watchEndpointSupportedOnesieConfig", typ: r("WatchEndpointSupportedOnesieConfig")},
  ], false),
  "WatchEndpointSupportedOnesieConfig": o([
    {json: "html5PlaybackOnesieConfig", js: "html5PlaybackOnesieConfig", typ: r("Html5PlaybackOnesieConfig")},
  ], false),
  "Html5PlaybackOnesieConfig": o([
    {json: "commonConfig", js: "commonConfig", typ: r("CommonConfig")},
  ], false),
  "CommonConfig": o([
    {json: "url", js: "url", typ: ""},
  ], false),
  "OverflowMenu": o([
    {json: "menuRenderer", js: "menuRenderer", typ: r("OverflowMenuMenuRenderer")},
  ], false),
  "OverflowMenuMenuRenderer": o([
    {json: "items", js: "items", typ: a(r("PurpleItem"))},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "accessibility", js: "accessibility", typ: r("AccessibilityData")},
  ], false),
  "PurpleItem": o([
    {json: "menuServiceItemRenderer", js: "menuServiceItemRenderer", typ: u(undefined, r("MenuItemRenderer"))},
    {json: "menuNavigationItemRenderer", js: "menuNavigationItemRenderer", typ: u(undefined, r("MenuItemRenderer"))},
  ], false),
  "MenuItemRenderer": o([
    {json: "text", js: "text", typ: r("DetailsText")},
    {json: "icon", js: "icon", typ: r("Icon")},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: u(undefined, r("MenuNavigationItemRendererNavigationEndpoint"))},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "serviceEndpoint", js: "serviceEndpoint", typ: u(undefined, r("MenuNavigationItemRendererServiceEndpoint"))},
  ], false),
  "MenuNavigationItemRendererNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("DefaultNavigationEndpointCommandMetadata")},
    {json: "userFeedbackEndpoint", js: "userFeedbackEndpoint", typ: u(undefined, r("UserFeedbackEndpoint"))},
    {json: "modalEndpoint", js: "modalEndpoint", typ: u(undefined, r("PurpleModalEndpoint"))},
  ], false),
  "DefaultNavigationEndpointCommandMetadata": o([
    {json: "webCommandMetadata", js: "webCommandMetadata", typ: r("StickyWebCommandMetadata")},
  ], false),
  "StickyWebCommandMetadata": o([
    {json: "ignoreNavigation", js: "ignoreNavigation", typ: true},
  ], false),
  "PurpleModalEndpoint": o([
    {json: "modal", js: "modal", typ: r("PurpleModal")},
  ], false),
  "PurpleModal": o([
    {json: "modalWithTitleAndButtonRenderer", js: "modalWithTitleAndButtonRenderer", typ: r("PurpleModalWithTitleAndButtonRenderer")},
  ], false),
  "PurpleModalWithTitleAndButtonRenderer": o([
    {json: "title", js: "title", typ: r("DetailsText")},
    {json: "content", js: "content", typ: r("DetailsText")},
    {json: "button", js: "button", typ: r("PurpleButton")},
  ], false),
  "PurpleButton": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("FluffyButtonRenderer")},
  ], false),
  "FluffyButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "isDisabled", js: "isDisabled", typ: true},
    {json: "text", js: "text", typ: r("TitleClass")},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: r("PurpleNavigationEndpoint")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "PurpleNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AutoplayVideoCommandMetadata")},
    {json: "signInEndpoint", js: "signInEndpoint", typ: r("AdsEngagementPanelContentRenderer")},
  ], false),
  "AdsEngagementPanelContentRenderer": o([
    {json: "hack", js: "hack", typ: true},
  ], false),
  "UserFeedbackEndpoint": o([
    {json: "hack", js: "hack", typ: true},
    {json: "bucketIdentifier", js: "bucketIdentifier", typ: ""},
  ], false),
  "MenuNavigationItemRendererServiceEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "showLiveChatParticipantsEndpoint", js: "showLiveChatParticipantsEndpoint", typ: u(undefined, r("AdsEngagementPanelContentRenderer"))},
    {json: "popoutLiveChatEndpoint", js: "popoutLiveChatEndpoint", typ: u(undefined, r("CommonConfig"))},
    {json: "toggleLiveChatTimestampsEndpoint", js: "toggleLiveChatTimestampsEndpoint", typ: u(undefined, r("AdsEngagementPanelContentRenderer"))},
    {json: "commandMetadata", js: "commandMetadata", typ: u(undefined, r("OnResponseReceivedEndpointCommandMetadata"))},
    {json: "signalServiceEndpoint", js: "signalServiceEndpoint", typ: u(undefined, r("PurpleSignalServiceEndpoint"))},
  ], false),
  "OnResponseReceivedEndpointCommandMetadata": o([
    {json: "webCommandMetadata", js: "webCommandMetadata", typ: r("IndigoWebCommandMetadata")},
  ], false),
  "IndigoWebCommandMetadata": o([
    {json: "sendPost", js: "sendPost", typ: true},
  ], false),
  "PurpleSignalServiceEndpoint": o([
    {json: "signal", js: "signal", typ: r("Signal")},
    {json: "actions", js: "actions", typ: a(r("PurpleAction"))},
  ], false),
  "PurpleAction": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "addToPlaylistCommand", js: "addToPlaylistCommand", typ: u(undefined, r("AddToPlaylistCommand"))},
    {json: "openPopupAction", js: "openPopupAction", typ: u(undefined, r("PurpleOpenPopupAction"))},
  ], false),
  "AddToPlaylistCommand": o([
    {json: "openMiniplayer", js: "openMiniplayer", typ: true},
    {json: "openListPanel", js: "openListPanel", typ: true},
    {json: "videoId", js: "videoId", typ: ""},
    {json: "listType", js: "listType", typ: r("ListType")},
    {json: "onCreateListCommand", js: "onCreateListCommand", typ: r("OnCreateListCommand")},
    {json: "videoIds", js: "videoIds", typ: a("")},
  ], false),
  "OnCreateListCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AcceptCommandCommandMetadata")},
    {json: "createPlaylistServiceEndpoint", js: "createPlaylistServiceEndpoint", typ: r("CreatePlaylistServiceEndpoint")},
  ], false),
  "CreatePlaylistServiceEndpoint": o([
    {json: "videoIds", js: "videoIds", typ: a("")},
    {json: "params", js: "params", typ: r("Params")},
  ], false),
  "PurpleOpenPopupAction": o([
    {json: "popup", js: "popup", typ: r("PurplePopup")},
    {json: "popupType", js: "popupType", typ: r("PopupType")},
  ], false),
  "PurplePopup": o([
    {json: "notificationActionRenderer", js: "notificationActionRenderer", typ: r("NotificationActionRenderer")},
  ], false),
  "NotificationActionRenderer": o([
    {json: "responseText", js: "responseText", typ: r("TitleClass")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "ViewSelector": o([
    {json: "sortFilterSubMenuRenderer", js: "sortFilterSubMenuRenderer", typ: r("SortFilterSubMenuRenderer")},
  ], false),
  "SortFilterSubMenuRenderer": o([
    {json: "subMenuItems", js: "subMenuItems", typ: a(r("SubMenuItem"))},
    {json: "accessibility", js: "accessibility", typ: r("AccessibilityData")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "SubMenuItem": o([
    {json: "title", js: "title", typ: ""},
    {json: "selected", js: "selected", typ: true},
    {json: "continuation", js: "continuation", typ: r("Continuation")},
    {json: "accessibility", js: "accessibility", typ: r("AccessibilityData")},
    {json: "subtitle", js: "subtitle", typ: ""},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "ShowHideButton": o([
    {json: "toggleButtonRenderer", js: "toggleButtonRenderer", typ: r("ShowHideButtonToggleButtonRenderer")},
  ], false),
  "ShowHideButtonToggleButtonRenderer": o([
    {json: "defaultText", js: "defaultText", typ: r("DetailsText")},
    {json: "toggledText", js: "toggledText", typ: r("DetailsText")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "TwoColumnWatchNextResultsResults": o([
    {json: "results", js: "results", typ: r("ResultsResults")},
  ], false),
  "ResultsResults": o([
    {json: "contents", js: "contents", typ: a(r("ContentElement"))},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "ContentElement": o([
    {json: "videoPrimaryInfoRenderer", js: "videoPrimaryInfoRenderer", typ: u(undefined, r("VideoPrimaryInfoRenderer"))},
    {json: "videoSecondaryInfoRenderer", js: "videoSecondaryInfoRenderer", typ: u(undefined, r("VideoSecondaryInfoRenderer"))},
  ], false),
  "VideoPrimaryInfoRenderer": o([
    {json: "title", js: "title", typ: r("DetailsText")},
    {json: "viewCount", js: "viewCount", typ: r("ViewCount")},
    {json: "videoActions", js: "videoActions", typ: r("VideoActions")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "updatedMetadataEndpoint", js: "updatedMetadataEndpoint", typ: r("VideoPrimaryInfoRendererUpdatedMetadataEndpoint")},
    {json: "superTitleLink", js: "superTitleLink", typ: r("SuperTitleLink")},
    {json: "dateText", js: "dateText", typ: r("TitleClass")},
  ], false),
  "SuperTitleLink": o([
    {json: "runs", js: "runs", typ: a(r("SuperTitleLinkRun"))},
  ], false),
  "SuperTitleLinkRun": o([
    {json: "text", js: "text", typ: ""},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: u(undefined, r("FluffyNavigationEndpoint"))},
    {json: "loggingDirectives", js: "loggingDirectives", typ: u(undefined, r("LoggingDirectives"))},
  ], false),
  "LoggingDirectives": o([
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "visibility", js: "visibility", typ: r("Visibility")},
  ], false),
  "Visibility": o([
    {json: "types", js: "types", typ: ""},
  ], false),
  "FluffyNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("EndpointCommandMetadata")},
    {json: "browseEndpoint", js: "browseEndpoint", typ: r("CommandBrowseEndpoint")},
  ], false),
  "EndpointCommandMetadata": o([
    {json: "webCommandMetadata", js: "webCommandMetadata", typ: r("IndecentWebCommandMetadata")},
  ], false),
  "IndecentWebCommandMetadata": o([
    {json: "url", js: "url", typ: ""},
    {json: "webPageType", js: "webPageType", typ: r("WebPageType")},
    {json: "rootVe", js: "rootVe", typ: 0},
    {json: "apiUrl", js: "apiUrl", typ: u(undefined, r("PurpleAPIURL"))},
  ], false),
  "VideoPrimaryInfoRendererUpdatedMetadataEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AcceptCommandCommandMetadata")},
    {json: "updatedMetadataEndpoint", js: "updatedMetadataEndpoint", typ: r("UpdatedMetadataEndpointUpdatedMetadataEndpoint")},
  ], false),
  "UpdatedMetadataEndpointUpdatedMetadataEndpoint": o([
    {json: "videoId", js: "videoId", typ: ""},
  ], false),
  "VideoActions": o([
    {json: "menuRenderer", js: "menuRenderer", typ: r("VideoActionsMenuRenderer")},
  ], false),
  "VideoActionsMenuRenderer": o([
    {json: "items", js: "items", typ: a(r("FluffyItem"))},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "topLevelButtons", js: "topLevelButtons", typ: a(r("TopLevelButton"))},
    {json: "accessibility", js: "accessibility", typ: r("AccessibilityData")},
  ], false),
  "FluffyItem": o([
    {json: "menuNavigationItemRenderer", js: "menuNavigationItemRenderer", typ: r("MenuItemRenderer")},
  ], false),
  "TopLevelButton": o([
    {json: "toggleButtonRenderer", js: "toggleButtonRenderer", typ: u(undefined, r("TopLevelButtonToggleButtonRenderer"))},
    {json: "buttonRenderer", js: "buttonRenderer", typ: u(undefined, r("TopLevelButtonButtonRenderer"))},
    {json: "downloadButtonRenderer", js: "downloadButtonRenderer", typ: u(undefined, r("DownloadButtonRenderer"))},
  ], false),
  "TopLevelButtonButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "isDisabled", js: "isDisabled", typ: true},
    {json: "text", js: "text", typ: r("DetailsText")},
    {json: "serviceEndpoint", js: "serviceEndpoint", typ: u(undefined, r("ServiceEndpointClass"))},
    {json: "icon", js: "icon", typ: r("Icon")},
    {json: "tooltip", js: "tooltip", typ: ""},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "accessibilityData", js: "accessibilityData", typ: r("AccessibilityData")},
    {json: "accessibility", js: "accessibility", typ: u(undefined, r("Accessibility"))},
    {json: "command", js: "command", typ: u(undefined, r("StickyCommand"))},
  ], false),
  "StickyCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("DefaultNavigationEndpointCommandMetadata")},
    {json: "modalEndpoint", js: "modalEndpoint", typ: r("CommandModalEndpoint")},
  ], false),
  "CommandModalEndpoint": o([
    {json: "modal", js: "modal", typ: r("FluffyModal")},
  ], false),
  "FluffyModal": o([
    {json: "modalWithTitleAndButtonRenderer", js: "modalWithTitleAndButtonRenderer", typ: r("FluffyModalWithTitleAndButtonRenderer")},
  ], false),
  "FluffyModalWithTitleAndButtonRenderer": o([
    {json: "title", js: "title", typ: r("DetailsText")},
    {json: "content", js: "content", typ: r("DetailsText")},
    {json: "button", js: "button", typ: r("FluffyButton")},
  ], false),
  "FluffyButton": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("TentacledButtonRenderer")},
  ], false),
  "TentacledButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "isDisabled", js: "isDisabled", typ: true},
    {json: "text", js: "text", typ: r("TitleClass")},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: r("TentacledNavigationEndpoint")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "TentacledNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AutoplayVideoCommandMetadata")},
    {json: "signInEndpoint", js: "signInEndpoint", typ: r("PurpleSignInEndpoint")},
  ], false),
  "PurpleSignInEndpoint": o([
    {json: "nextEndpoint", js: "nextEndpoint", typ: r("CurrentVideoEndpointClass")},
    {json: "idamTag", js: "idamTag", typ: ""},
  ], false),
  "ServiceEndpointClass": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AcceptCommandCommandMetadata")},
    {json: "shareEntityServiceEndpoint", js: "shareEntityServiceEndpoint", typ: r("ShareEntityServiceEndpoint")},
  ], false),
  "ShareEntityServiceEndpoint": o([
    {json: "serializedShareEntity", js: "serializedShareEntity", typ: ""},
    {json: "commands", js: "commands", typ: a(r("ShareEntityServiceEndpointCommand"))},
  ], false),
  "ShareEntityServiceEndpointCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "openPopupAction", js: "openPopupAction", typ: r("CommandOpenPopupAction")},
  ], false),
  "CommandOpenPopupAction": o([
    {json: "popup", js: "popup", typ: r("FluffyPopup")},
    {json: "popupType", js: "popupType", typ: ""},
    {json: "beReused", js: "beReused", typ: true},
  ], false),
  "FluffyPopup": o([
    {json: "unifiedSharePanelRenderer", js: "unifiedSharePanelRenderer", typ: r("UnifiedSharePanelRenderer")},
  ], false),
  "UnifiedSharePanelRenderer": o([
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "showLoadingSpinner", js: "showLoadingSpinner", typ: true},
  ], false),
  "DownloadButtonRenderer": o([
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "targetId", js: "targetId", typ: ""},
    {json: "command", js: "command", typ: r("DownloadButtonRendererCommand")},
  ], false),
  "DownloadButtonRendererCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "offlineVideoEndpoint", js: "offlineVideoEndpoint", typ: r("OfflineVideoEndpoint")},
  ], false),
  "OfflineVideoEndpoint": o([
    {json: "videoId", js: "videoId", typ: ""},
    {json: "onAddCommand", js: "onAddCommand", typ: r("OnAddCommand")},
  ], false),
  "OnAddCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "getDownloadActionCommand", js: "getDownloadActionCommand", typ: r("GetDownloadActionCommand")},
  ], false),
  "GetDownloadActionCommand": o([
    {json: "videoId", js: "videoId", typ: ""},
    {json: "params", js: "params", typ: ""},
  ], false),
  "TopLevelButtonToggleButtonRenderer": o([
    {json: "style", js: "style", typ: r("StyleClass")},
    {json: "isToggled", js: "isToggled", typ: true},
    {json: "isDisabled", js: "isDisabled", typ: true},
    {json: "defaultIcon", js: "defaultIcon", typ: r("Icon")},
    {json: "defaultText", js: "defaultText", typ: r("ShortViewCountText")},
    {json: "toggledText", js: "toggledText", typ: r("ShortViewCountText")},
    {json: "accessibility", js: "accessibility", typ: r("Accessibility")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "defaultTooltip", js: "defaultTooltip", typ: ""},
    {json: "toggledTooltip", js: "toggledTooltip", typ: ""},
    {json: "toggledStyle", js: "toggledStyle", typ: r("StyleClass")},
    {json: "defaultNavigationEndpoint", js: "defaultNavigationEndpoint", typ: r("DefaultNavigationEndpoint")},
    {json: "accessibilityData", js: "accessibilityData", typ: r("AccessibilityData")},
    {json: "toggleButtonSupportedData", js: "toggleButtonSupportedData", typ: r("ToggleButtonSupportedData")},
    {json: "targetId", js: "targetId", typ: ""},
  ], false),
  "DefaultNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("DefaultNavigationEndpointCommandMetadata")},
    {json: "modalEndpoint", js: "modalEndpoint", typ: r("DefaultNavigationEndpointModalEndpoint")},
  ], false),
  "DefaultNavigationEndpointModalEndpoint": o([
    {json: "modal", js: "modal", typ: r("TentacledModal")},
  ], false),
  "TentacledModal": o([
    {json: "modalWithTitleAndButtonRenderer", js: "modalWithTitleAndButtonRenderer", typ: r("TentacledModalWithTitleAndButtonRenderer")},
  ], false),
  "TentacledModalWithTitleAndButtonRenderer": o([
    {json: "title", js: "title", typ: r("TitleClass")},
    {json: "content", js: "content", typ: r("TitleClass")},
    {json: "button", js: "button", typ: r("FluffyButton")},
  ], false),
  "ShortViewCountText": o([
    {json: "accessibility", js: "accessibility", typ: u(undefined, r("AccessibilityData"))},
    {json: "simpleText", js: "simpleText", typ: ""},
  ], false),
  "StyleClass": o([
    {json: "styleType", js: "styleType", typ: ""},
  ], false),
  "ToggleButtonSupportedData": o([
    {json: "toggleButtonIdData", js: "toggleButtonIdData", typ: r("ToggleButtonIDData")},
  ], false),
  "ToggleButtonIDData": o([
    {json: "id", js: "id", typ: ""},
  ], false),
  "ViewCount": o([
    {json: "videoViewCountRenderer", js: "videoViewCountRenderer", typ: r("VideoViewCountRenderer")},
  ], false),
  "VideoViewCountRenderer": o([
    {json: "viewCount", js: "viewCount", typ: r("DetailsText")},
    {json: "isLive", js: "isLive", typ: true},
  ], false),
  "VideoSecondaryInfoRenderer": o([
    {json: "owner", js: "owner", typ: r("Owner")},
    {json: "description", js: "description", typ: r("DescriptionBodyTextClass")},
    {json: "subscribeButton", js: "subscribeButton", typ: r("SubscribeButton")},
    {json: "metadataRowContainer", js: "metadataRowContainer", typ: r("MetadataRowContainer")},
    {json: "showMoreText", js: "showMoreText", typ: r("TitleClass")},
    {json: "showLessText", js: "showLessText", typ: r("TitleClass")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "defaultExpanded", js: "defaultExpanded", typ: true},
    {json: "descriptionCollapsedLines", js: "descriptionCollapsedLines", typ: 0},
    {json: "showMoreCommand", js: "showMoreCommand", typ: r("ShowMoreCommand")},
    {json: "showLessCommand", js: "showLessCommand", typ: r("ShowLessCommand")},
  ], false),
  "DescriptionBodyTextClass": o([
    {json: "runs", js: "runs", typ: a(r("DescriptionRun"))},
  ], false),
  "DescriptionRun": o([
    {json: "text", js: "text", typ: ""},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: u(undefined, r("StickyNavigationEndpoint"))},
    {json: "loggingDirectives", js: "loggingDirectives", typ: u(undefined, r("LoggingDirectives"))},
  ], false),
  "StickyNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("EndpointCommandMetadata")},
    {json: "urlEndpoint", js: "urlEndpoint", typ: u(undefined, r("PurpleURLEndpoint"))},
    {json: "watchEndpoint", js: "watchEndpoint", typ: u(undefined, r("PurpleWatchEndpoint"))},
    {json: "browseEndpoint", js: "browseEndpoint", typ: u(undefined, r("CommandBrowseEndpoint"))},
  ], false),
  "PurpleURLEndpoint": o([
    {json: "url", js: "url", typ: ""},
    {json: "target", js: "target", typ: ""},
    {json: "nofollow", js: "nofollow", typ: true},
  ], false),
  "PurpleWatchEndpoint": o([
    {json: "videoId", js: "videoId", typ: ""},
    {json: "startTimeSeconds", js: "startTimeSeconds", typ: 0},
    {json: "watchEndpointSupportedOnesieConfig", js: "watchEndpointSupportedOnesieConfig", typ: r("WatchEndpointSupportedOnesieConfig")},
  ], false),
  "MetadataRowContainer": o([
    {json: "metadataRowContainerRenderer", js: "metadataRowContainerRenderer", typ: r("MetadataRowContainerRenderer")},
  ], false),
  "MetadataRowContainerRenderer": o([
    {json: "collapsedItemCount", js: "collapsedItemCount", typ: 0},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "Owner": o([
    {json: "videoOwnerRenderer", js: "videoOwnerRenderer", typ: r("VideoOwnerRenderer")},
  ], false),
  "VideoOwnerRenderer": o([
    {json: "thumbnail", js: "thumbnail", typ: r("BackgroundClass")},
    {json: "title", js: "title", typ: r("Byline")},
    {json: "subscriptionButton", js: "subscriptionButton", typ: r("DismissStrategy")},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: r("VideoOwnerRendererNavigationEndpoint")},
    {json: "subscriberCountText", js: "subscriberCountText", typ: r("ShortViewCountText")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "VideoOwnerRendererNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("EndpointCommandMetadata")},
    {json: "browseEndpoint", js: "browseEndpoint", typ: r("PurpleBrowseEndpoint")},
  ], false),
  "PurpleBrowseEndpoint": o([
    {json: "browseId", js: "browseId", typ: ""},
    {json: "canonicalBaseUrl", js: "canonicalBaseUrl", typ: ""},
  ], false),
  "DismissStrategy": o([
    {json: "type", js: "type", typ: ""},
  ], false),
  "Byline": o([
    {json: "runs", js: "runs", typ: a(r("BylineRun"))},
  ], false),
  "BylineRun": o([
    {json: "text", js: "text", typ: ""},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: r("VideoOwnerRendererNavigationEndpoint")},
  ], false),
  "ShowLessCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "changeEngagementPanelVisibilityAction", js: "changeEngagementPanelVisibilityAction", typ: r("ChangeEngagementPanelVisibilityAction")},
  ], false),
  "ChangeEngagementPanelVisibilityAction": o([
    {json: "targetId", js: "targetId", typ: ""},
    {json: "visibility", js: "visibility", typ: ""},
  ], false),
  "ShowMoreCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandExecutorCommand", js: "commandExecutorCommand", typ: r("ShowMoreCommandCommandExecutorCommand")},
  ], false),
  "ShowMoreCommandCommandExecutorCommand": o([
    {json: "commands", js: "commands", typ: a(r("IndigoCommand"))},
  ], false),
  "IndigoCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "changeEngagementPanelVisibilityAction", js: "changeEngagementPanelVisibilityAction", typ: u(undefined, r("ChangeEngagementPanelVisibilityAction"))},
    {json: "scrollToEngagementPanelCommand", js: "scrollToEngagementPanelCommand", typ: u(undefined, r("ScrollToEngagementPanelCommand"))},
  ], false),
  "ScrollToEngagementPanelCommand": o([
    {json: "targetId", js: "targetId", typ: ""},
  ], false),
  "SubscribeButton": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("SubscribeButtonButtonRenderer")},
  ], false),
  "SubscribeButtonButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "isDisabled", js: "isDisabled", typ: true},
    {json: "text", js: "text", typ: r("DetailsText")},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: r("IndigoNavigationEndpoint")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "targetId", js: "targetId", typ: ""},
  ], false),
  "IndigoNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("DefaultNavigationEndpointCommandMetadata")},
    {json: "modalEndpoint", js: "modalEndpoint", typ: r("FluffyModalEndpoint")},
  ], false),
  "FluffyModalEndpoint": o([
    {json: "modal", js: "modal", typ: r("StickyModal")},
  ], false),
  "StickyModal": o([
    {json: "modalWithTitleAndButtonRenderer", js: "modalWithTitleAndButtonRenderer", typ: r("StickyModalWithTitleAndButtonRenderer")},
  ], false),
  "StickyModalWithTitleAndButtonRenderer": o([
    {json: "title", js: "title", typ: r("TitleClass")},
    {json: "content", js: "content", typ: r("TitleClass")},
    {json: "button", js: "button", typ: r("TentacledButton")},
  ], false),
  "TentacledButton": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("StickyButtonRenderer")},
  ], false),
  "StickyButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "isDisabled", js: "isDisabled", typ: true},
    {json: "text", js: "text", typ: r("TitleClass")},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: r("IndecentNavigationEndpoint")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "IndecentNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AutoplayVideoCommandMetadata")},
    {json: "signInEndpoint", js: "signInEndpoint", typ: r("FluffySignInEndpoint")},
  ], false),
  "FluffySignInEndpoint": o([
    {json: "nextEndpoint", js: "nextEndpoint", typ: r("CurrentVideoEndpointClass")},
    {json: "continueAction", js: "continueAction", typ: ""},
    {json: "idamTag", js: "idamTag", typ: ""},
  ], false),
  "TwoColumnWatchNextResultsSecondaryResults": o([
    {json: "secondaryResults", js: "secondaryResults", typ: r("SecondaryResultsSecondaryResults")},
  ], false),
  "SecondaryResultsSecondaryResults": o([
    {json: "results", js: "results", typ: a(r("SecondaryResultsResult"))},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "targetId", js: "targetId", typ: ""},
  ], false),
  "SecondaryResultsResult": o([
    {json: "compactVideoRenderer", js: "compactVideoRenderer", typ: u(undefined, r("CompactVideoRenderer"))},
    {json: "continuationItemRenderer", js: "continuationItemRenderer", typ: u(undefined, r("ContinuationItemRenderer"))},
  ], false),
  "CompactVideoRenderer": o([
    {json: "videoId", js: "videoId", typ: ""},
    {json: "thumbnail", js: "thumbnail", typ: r("BackgroundClass")},
    {json: "title", js: "title", typ: r("ShortViewCountText")},
    {json: "longBylineText", js: "longBylineText", typ: r("Byline")},
    {json: "publishedTimeText", js: "publishedTimeText", typ: u(undefined, r("TitleClass"))},
    {json: "viewCountText", js: "viewCountText", typ: r("ViewCountText")},
    {json: "lengthText", js: "lengthText", typ: u(undefined, r("ShortViewCountText"))},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: r("CompactVideoRendererNavigationEndpoint")},
    {json: "shortBylineText", js: "shortBylineText", typ: r("Byline")},
    {json: "channelThumbnail", js: "channelThumbnail", typ: r("BackgroundClass")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "shortViewCountText", js: "shortViewCountText", typ: r("Text")},
    {json: "menu", js: "menu", typ: r("Menu")},
    {json: "thumbnailOverlays", js: "thumbnailOverlays", typ: a(r("CompactVideoRendererThumbnailOverlay"))},
    {json: "accessibility", js: "accessibility", typ: r("AccessibilityData")},
    {json: "richThumbnail", js: "richThumbnail", typ: u(undefined, r("RichThumbnail"))},
    {json: "badges", js: "badges", typ: u(undefined, a(r("Badge")))},
    {json: "ownerBadges", js: "ownerBadges", typ: u(undefined, a(r("OwnerBadge")))},
  ], false),
  "Badge": o([
    {json: "metadataBadgeRenderer", js: "metadataBadgeRenderer", typ: r("BadgeMetadataBadgeRenderer")},
  ], false),
  "BadgeMetadataBadgeRenderer": o([
    {json: "style", js: "style", typ: r("MetadataBadgeRendererStyle")},
    {json: "label", js: "label", typ: r("Label")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "Menu": o([
    {json: "menuRenderer", js: "menuRenderer", typ: r("MenuMenuRenderer")},
  ], false),
  "MenuMenuRenderer": o([
    {json: "items", js: "items", typ: a(r("TentacledItem"))},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "accessibility", js: "accessibility", typ: r("AccessibilityData")},
    {json: "targetId", js: "targetId", typ: u(undefined, "")},
  ], false),
  "TentacledItem": o([
    {json: "menuServiceItemRenderer", js: "menuServiceItemRenderer", typ: r("MenuItemRenderer")},
  ], false),
  "CompactVideoRendererNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AutoplayVideoCommandMetadata")},
    {json: "watchEndpoint", js: "watchEndpoint", typ: r("FluffyWatchEndpoint")},
  ], false),
  "FluffyWatchEndpoint": o([
    {json: "videoId", js: "videoId", typ: ""},
    {json: "nofollow", js: "nofollow", typ: true},
    {json: "watchEndpointSupportedOnesieConfig", js: "watchEndpointSupportedOnesieConfig", typ: r("WatchEndpointSupportedOnesieConfig")},
  ], false),
  "OwnerBadge": o([
    {json: "metadataBadgeRenderer", js: "metadataBadgeRenderer", typ: r("OwnerBadgeMetadataBadgeRenderer")},
  ], false),
  "OwnerBadgeMetadataBadgeRenderer": o([
    {json: "icon", js: "icon", typ: r("Icon")},
    {json: "style", js: "style", typ: ""},
    {json: "tooltip", js: "tooltip", typ: ""},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "accessibilityData", js: "accessibilityData", typ: r("Accessibility")},
  ], false),
  "RichThumbnail": o([
    {json: "movingThumbnailRenderer", js: "movingThumbnailRenderer", typ: r("MovingThumbnailRenderer")},
  ], false),
  "MovingThumbnailRenderer": o([
    {json: "movingThumbnailDetails", js: "movingThumbnailDetails", typ: u(undefined, r("MovingThumbnailDetails"))},
    {json: "enableHoveredLogging", js: "enableHoveredLogging", typ: true},
    {json: "enableOverlay", js: "enableOverlay", typ: true},
  ], false),
  "MovingThumbnailDetails": o([
    {json: "thumbnails", js: "thumbnails", typ: a(r("ThumbnailElement"))},
    {json: "logAsMovingThumbnail", js: "logAsMovingThumbnail", typ: true},
  ], false),
  "Text": o([
    {json: "accessibility", js: "accessibility", typ: u(undefined, r("AccessibilityData"))},
    {json: "simpleText", js: "simpleText", typ: u(undefined, "")},
    {json: "runs", js: "runs", typ: u(undefined, a(r("DetailsTextRun")))},
  ], false),
  "CompactVideoRendererThumbnailOverlay": o([
    {json: "thumbnailOverlayTimeStatusRenderer", js: "thumbnailOverlayTimeStatusRenderer", typ: u(undefined, r("PurpleThumbnailOverlayTimeStatusRenderer"))},
    {json: "thumbnailOverlayToggleButtonRenderer", js: "thumbnailOverlayToggleButtonRenderer", typ: u(undefined, r("ThumbnailOverlayToggleButtonRenderer"))},
    {json: "thumbnailOverlayNowPlayingRenderer", js: "thumbnailOverlayNowPlayingRenderer", typ: u(undefined, r("ThumbnailOverlayNowPlayingRenderer"))},
  ], false),
  "ThumbnailOverlayNowPlayingRenderer": o([
    {json: "text", js: "text", typ: r("DetailsText")},
  ], false),
  "PurpleThumbnailOverlayTimeStatusRenderer": o([
    {json: "text", js: "text", typ: r("ShortViewCountText")},
    {json: "style", js: "style", typ: r("ThumbnailOverlayTimeStatusRendererStyle")},
  ], false),
  "ThumbnailOverlayToggleButtonRenderer": o([
    {json: "isToggled", js: "isToggled", typ: u(undefined, true)},
    {json: "untoggledIcon", js: "untoggledIcon", typ: r("Icon")},
    {json: "toggledIcon", js: "toggledIcon", typ: r("Icon")},
    {json: "untoggledTooltip", js: "untoggledTooltip", typ: r("UntoggledTooltip")},
    {json: "toggledTooltip", js: "toggledTooltip", typ: r("ToggledTooltip")},
    {json: "untoggledServiceEndpoint", js: "untoggledServiceEndpoint", typ: r("UntoggledServiceEndpoint")},
    {json: "toggledServiceEndpoint", js: "toggledServiceEndpoint", typ: u(undefined, r("ToggledServiceEndpoint"))},
    {json: "untoggledAccessibility", js: "untoggledAccessibility", typ: r("AccessibilityData")},
    {json: "toggledAccessibility", js: "toggledAccessibility", typ: r("AccessibilityData")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "ToggledServiceEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AcceptCommandCommandMetadata")},
    {json: "playlistEditEndpoint", js: "playlistEditEndpoint", typ: r("ToggledServiceEndpointPlaylistEditEndpoint")},
  ], false),
  "ToggledServiceEndpointPlaylistEditEndpoint": o([
    {json: "playlistId", js: "playlistId", typ: r("PlaylistID")},
    {json: "actions", js: "actions", typ: a(r("FluffyAction"))},
  ], false),
  "FluffyAction": o([
    {json: "action", js: "action", typ: r("AmbitiousAction")},
    {json: "removedVideoId", js: "removedVideoId", typ: ""},
  ], false),
  "UntoggledServiceEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AcceptCommandCommandMetadata")},
    {json: "playlistEditEndpoint", js: "playlistEditEndpoint", typ: u(undefined, r("UntoggledServiceEndpointPlaylistEditEndpoint"))},
    {json: "signalServiceEndpoint", js: "signalServiceEndpoint", typ: u(undefined, r("UntoggledServiceEndpointSignalServiceEndpoint"))},
  ], false),
  "UntoggledServiceEndpointPlaylistEditEndpoint": o([
    {json: "playlistId", js: "playlistId", typ: r("PlaylistID")},
    {json: "actions", js: "actions", typ: a(r("TentacledAction"))},
  ], false),
  "TentacledAction": o([
    {json: "addedVideoId", js: "addedVideoId", typ: ""},
    {json: "action", js: "action", typ: r("CunningAction")},
  ], false),
  "UntoggledServiceEndpointSignalServiceEndpoint": o([
    {json: "signal", js: "signal", typ: r("Signal")},
    {json: "actions", js: "actions", typ: a(r("StickyAction"))},
  ], false),
  "StickyAction": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "addToPlaylistCommand", js: "addToPlaylistCommand", typ: r("AddToPlaylistCommand")},
  ], false),
  "ViewCountText": o([
    {json: "simpleText", js: "simpleText", typ: u(undefined, "")},
    {json: "runs", js: "runs", typ: u(undefined, a(r("DetailsTextRun")))},
  ], false),
  "ContinuationItemRenderer": o([
    {json: "trigger", js: "trigger", typ: ""},
    {json: "continuationEndpoint", js: "continuationEndpoint", typ: r("ContinuationEndpoint")},
    {json: "button", js: "button", typ: r("ContinuationItemRendererButton")},
  ], false),
  "ContinuationItemRendererButton": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("IndigoButtonRenderer")},
  ], false),
  "IndigoButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "isDisabled", js: "isDisabled", typ: true},
    {json: "text", js: "text", typ: r("DetailsText")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "command", js: "command", typ: r("ContinuationEndpoint")},
  ], false),
  "ContinuationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AcceptCommandCommandMetadata")},
    {json: "continuationCommand", js: "continuationCommand", typ: r("ContinuationCommand")},
  ], false),
  "ContinuationCommand": o([
    {json: "token", js: "token", typ: ""},
    {json: "request", js: "request", typ: ""},
  ], false),
  "EngagementPanel": o([
    {json: "engagementPanelSectionListRenderer", js: "engagementPanelSectionListRenderer", typ: r("EngagementPanelSectionListRenderer")},
  ], false),
  "EngagementPanelSectionListRenderer": o([
    {json: "content", js: "content", typ: r("EngagementPanelSectionListRendererContent")},
    {json: "targetId", js: "targetId", typ: ""},
    {json: "visibility", js: "visibility", typ: ""},
    {json: "loggingDirectives", js: "loggingDirectives", typ: r("LoggingDirectives")},
    {json: "panelIdentifier", js: "panelIdentifier", typ: u(undefined, "")},
    {json: "header", js: "header", typ: u(undefined, r("EngagementPanelSectionListRendererHeader"))},
    {json: "veType", js: "veType", typ: u(undefined, 0)},
  ], false),
  "EngagementPanelSectionListRendererContent": o([
    {json: "adsEngagementPanelContentRenderer", js: "adsEngagementPanelContentRenderer", typ: u(undefined, r("AdsEngagementPanelContentRenderer"))},
    {json: "structuredDescriptionContentRenderer", js: "structuredDescriptionContentRenderer", typ: u(undefined, r("StructuredDescriptionContentRenderer"))},
  ], false),
  "StructuredDescriptionContentRenderer": o([
    {json: "items", js: "items", typ: a(r("StructuredDescriptionContentRendererItem"))},
  ], false),
  "StructuredDescriptionContentRendererItem": o([
    {json: "expandableVideoDescriptionBodyRenderer", js: "expandableVideoDescriptionBodyRenderer", typ: r("ExpandableVideoDescriptionBodyRenderer")},
  ], false),
  "ExpandableVideoDescriptionBodyRenderer": o([
    {json: "descriptionBodyText", js: "descriptionBodyText", typ: r("DescriptionBodyTextClass")},
    {json: "showMoreText", js: "showMoreText", typ: r("TitleClass")},
    {json: "showLessText", js: "showLessText", typ: r("TitleClass")},
  ], false),
  "EngagementPanelSectionListRendererHeader": o([
    {json: "engagementPanelTitleHeaderRenderer", js: "engagementPanelTitleHeaderRenderer", typ: r("EngagementPanelTitleHeaderRenderer")},
  ], false),
  "EngagementPanelTitleHeaderRenderer": o([
    {json: "title", js: "title", typ: r("TitleClass")},
    {json: "visibilityButton", js: "visibilityButton", typ: r("VisibilityButton")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "VisibilityButton": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("VisibilityButtonButtonRenderer")},
  ], false),
  "VisibilityButtonButtonRenderer": o([
    {json: "icon", js: "icon", typ: r("Icon")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "accessibilityData", js: "accessibilityData", typ: r("AccessibilityData")},
    {json: "command", js: "command", typ: r("IndecentCommand")},
  ], false),
  "IndecentCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandExecutorCommand", js: "commandExecutorCommand", typ: r("TentacledCommandExecutorCommand")},
  ], false),
  "TentacledCommandExecutorCommand": o([
    {json: "commands", js: "commands", typ: a(r("HilariousCommand"))},
  ], false),
  "HilariousCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "changeEngagementPanelVisibilityAction", js: "changeEngagementPanelVisibilityAction", typ: u(undefined, r("ChangeEngagementPanelVisibilityAction"))},
    {json: "updateToggleButtonStateCommand", js: "updateToggleButtonStateCommand", typ: u(undefined, r("UpdateToggleButtonStateCommand"))},
  ], false),
  "UpdateToggleButtonStateCommand": o([
    {json: "toggled", js: "toggled", typ: true},
    {json: "buttonId", js: "buttonId", typ: ""},
  ], false),
  "ResponseFrameworkUpdates": o([
    {json: "entityBatchUpdate", js: "entityBatchUpdate", typ: r("FluffyEntityBatchUpdate")},
  ], false),
  "FluffyEntityBatchUpdate": o([
    {json: "mutations", js: "mutations", typ: a(r("FluffyMutation"))},
    {json: "timestamp", js: "timestamp", typ: r("Timestamp")},
  ], false),
  "FluffyMutation": o([
    {json: "entityKey", js: "entityKey", typ: ""},
    {json: "type", js: "type", typ: ""},
    {json: "options", js: "options", typ: r("Options")},
  ], false),
  "Options": o([
    {json: "persistenceOption", js: "persistenceOption", typ: ""},
  ], false),
  "OnResponseReceivedEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("OnResponseReceivedEndpointCommandMetadata")},
    {json: "signalServiceEndpoint", js: "signalServiceEndpoint", typ: r("OnResponseReceivedEndpointSignalServiceEndpoint")},
  ], false),
  "OnResponseReceivedEndpointSignalServiceEndpoint": o([
    {json: "signal", js: "signal", typ: r("Signal")},
    {json: "actions", js: "actions", typ: a(r("IndigoAction"))},
  ], false),
  "IndigoAction": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "signalAction", js: "signalAction", typ: r("SignalAction")},
  ], false),
  "SignalAction": o([
    {json: "signal", js: "signal", typ: ""},
  ], false),
  "Overlay": o([
    {json: "tooltipRenderer", js: "tooltipRenderer", typ: r("TooltipRenderer")},
  ], false),
  "TooltipRenderer": o([
    {json: "promoConfig", js: "promoConfig", typ: r("PromoConfig")},
    {json: "targetId", js: "targetId", typ: ""},
    {json: "text", js: "text", typ: r("DetailsText")},
    {json: "detailsText", js: "detailsText", typ: r("DetailsText")},
    {json: "dismissButton", js: "dismissButton", typ: r("DismissButton")},
    {json: "suggestedPosition", js: "suggestedPosition", typ: r("DismissStrategy")},
    {json: "dismissStrategy", js: "dismissStrategy", typ: r("DismissStrategy")},
    {json: "dwellTimeMs", js: "dwellTimeMs", typ: ""},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "PromoConfig": o([
    {json: "promoId", js: "promoId", typ: ""},
    {json: "impressionEndpoints", js: "impressionEndpoints", typ: a(r("AcceptCommand"))},
    {json: "acceptCommand", js: "acceptCommand", typ: r("AcceptCommand")},
    {json: "dismissCommand", js: "dismissCommand", typ: r("AcceptCommand")},
  ], false),
  "PlayerOverlays": o([
    {json: "playerOverlayRenderer", js: "playerOverlayRenderer", typ: r("PlayerOverlayRenderer")},
  ], false),
  "PlayerOverlayRenderer": o([
    {json: "endScreen", js: "endScreen", typ: r("EndScreen")},
    {json: "autoplay", js: "autoplay", typ: r("PlayerOverlayRendererAutoplay")},
    {json: "shareButton", js: "shareButton", typ: r("ShareButtonClass")},
    {json: "addToMenu", js: "addToMenu", typ: r("AddToMenu")},
    {json: "videoDetails", js: "videoDetails", typ: r("PlayerOverlayRendererVideoDetails")},
    {json: "decoratedPlayerBarRenderer", js: "decoratedPlayerBarRenderer", typ: r("DecoratedPlayerBarRenderer")},
  ], false),
  "AddToMenu": o([
    {json: "menuRenderer", js: "menuRenderer", typ: r("AddToMenuMenuRenderer")},
  ], false),
  "AddToMenuMenuRenderer": o([
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "PlayerOverlayRendererAutoplay": o([
    {json: "playerOverlayAutoplayRenderer", js: "playerOverlayAutoplayRenderer", typ: r("PlayerOverlayAutoplayRenderer")},
  ], false),
  "PlayerOverlayAutoplayRenderer": o([
    {json: "title", js: "title", typ: r("TitleClass")},
    {json: "videoTitle", js: "videoTitle", typ: r("ShortViewCountText")},
    {json: "byline", js: "byline", typ: r("Byline")},
    {json: "pauseText", js: "pauseText", typ: r("TitleClass")},
    {json: "background", js: "background", typ: r("BackgroundClass")},
    {json: "countDownSecs", js: "countDownSecs", typ: 0},
    {json: "cancelButton", js: "cancelButton", typ: r("CancelButton")},
    {json: "nextButton", js: "nextButton", typ: r("CloseButtonClass")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "closeButton", js: "closeButton", typ: r("CloseButtonClass")},
    {json: "thumbnailOverlays", js: "thumbnailOverlays", typ: a(r("PlayerOverlayAutoplayRendererThumbnailOverlay"))},
    {json: "preferImmediateRedirect", js: "preferImmediateRedirect", typ: true},
    {json: "videoId", js: "videoId", typ: ""},
    {json: "publishedTimeText", js: "publishedTimeText", typ: r("TitleClass")},
    {json: "webShowNewAutonavCountdown", js: "webShowNewAutonavCountdown", typ: true},
    {json: "webShowBigThumbnailEndscreen", js: "webShowBigThumbnailEndscreen", typ: true},
    {json: "shortViewCountText", js: "shortViewCountText", typ: r("ShortViewCountText")},
    {json: "countDownSecsForFullscreen", js: "countDownSecsForFullscreen", typ: 0},
  ], false),
  "CancelButton": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("CancelButtonButtonRenderer")},
  ], false),
  "CancelButtonButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "isDisabled", js: "isDisabled", typ: true},
    {json: "text", js: "text", typ: r("TitleClass")},
    {json: "accessibility", js: "accessibility", typ: r("Accessibility")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "command", js: "command", typ: r("AmbitiousCommand")},
  ], false),
  "AmbitiousCommand": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AcceptCommandCommandMetadata")},
    {json: "getSurveyCommand", js: "getSurveyCommand", typ: r("GetSurveyCommand")},
  ], false),
  "GetSurveyCommand": o([
    {json: "endpoint", js: "endpoint", typ: r("GetSurveyCommandEndpoint")},
    {json: "action", js: "action", typ: ""},
  ], false),
  "GetSurveyCommandEndpoint": o([
    {json: "watch", js: "watch", typ: r("AdsEngagementPanelContentRenderer")},
  ], false),
  "PlayerOverlayAutoplayRendererThumbnailOverlay": o([
    {json: "thumbnailOverlayTimeStatusRenderer", js: "thumbnailOverlayTimeStatusRenderer", typ: r("PurpleThumbnailOverlayTimeStatusRenderer")},
  ], false),
  "DecoratedPlayerBarRenderer": o([
    {json: "decoratedPlayerBarRenderer", js: "decoratedPlayerBarRenderer", typ: r("Media")},
  ], false),
  "Media": o([
  ], false),
  "EndScreen": o([
    {json: "watchNextEndScreenRenderer", js: "watchNextEndScreenRenderer", typ: r("WatchNextEndScreenRenderer")},
  ], false),
  "WatchNextEndScreenRenderer": o([
    {json: "results", js: "results", typ: a(r("WatchNextEndScreenRendererResult"))},
    {json: "title", js: "title", typ: r("TitleClass")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "WatchNextEndScreenRendererResult": o([
    {json: "endScreenVideoRenderer", js: "endScreenVideoRenderer", typ: r("EndScreenVideoRenderer")},
  ], false),
  "EndScreenVideoRenderer": o([
    {json: "videoId", js: "videoId", typ: ""},
    {json: "thumbnail", js: "thumbnail", typ: r("BackgroundClass")},
    {json: "title", js: "title", typ: r("ShortViewCountText")},
    {json: "shortBylineText", js: "shortBylineText", typ: r("Byline")},
    {json: "lengthText", js: "lengthText", typ: u(undefined, r("ShortViewCountText"))},
    {json: "lengthInSeconds", js: "lengthInSeconds", typ: u(undefined, 0)},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: r("CurrentVideoEndpointClass")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "shortViewCountText", js: "shortViewCountText", typ: r("Text")},
    {json: "publishedTimeText", js: "publishedTimeText", typ: r("TitleClass")},
    {json: "thumbnailOverlays", js: "thumbnailOverlays", typ: a(r("EndScreenVideoRendererThumbnailOverlay"))},
  ], false),
  "EndScreenVideoRendererThumbnailOverlay": o([
    {json: "thumbnailOverlayTimeStatusRenderer", js: "thumbnailOverlayTimeStatusRenderer", typ: u(undefined, r("FluffyThumbnailOverlayTimeStatusRenderer"))},
    {json: "thumbnailOverlayNowPlayingRenderer", js: "thumbnailOverlayNowPlayingRenderer", typ: u(undefined, r("ThumbnailOverlayNowPlayingRenderer"))},
  ], false),
  "FluffyThumbnailOverlayTimeStatusRenderer": o([
    {json: "text", js: "text", typ: r("Text")},
    {json: "style", js: "style", typ: r("ThumbnailOverlayTimeStatusRendererStyle")},
    {json: "icon", js: "icon", typ: u(undefined, r("Icon"))},
  ], false),
  "ShareButtonClass": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("ShareButtonButtonRenderer")},
  ], false),
  "ShareButtonButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "isDisabled", js: "isDisabled", typ: true},
    {json: "icon", js: "icon", typ: r("Icon")},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: u(undefined, r("ServiceEndpointClass"))},
    {json: "tooltip", js: "tooltip", typ: ""},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "serviceEndpoint", js: "serviceEndpoint", typ: u(undefined, r("ButtonRendererServiceEndpoint"))},
    {json: "accessibilityData", js: "accessibilityData", typ: u(undefined, r("AccessibilityData"))},
  ], false),
  "ButtonRendererServiceEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("OnResponseReceivedEndpointCommandMetadata")},
    {json: "signalServiceEndpoint", js: "signalServiceEndpoint", typ: r("FluffySignalServiceEndpoint")},
  ], false),
  "FluffySignalServiceEndpoint": o([
    {json: "signal", js: "signal", typ: r("Signal")},
    {json: "actions", js: "actions", typ: a(r("IndecentAction"))},
  ], false),
  "IndecentAction": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "openPopupAction", js: "openPopupAction", typ: r("FluffyOpenPopupAction")},
  ], false),
  "FluffyOpenPopupAction": o([
    {json: "popup", js: "popup", typ: r("TentacledPopup")},
    {json: "popupType", js: "popupType", typ: ""},
  ], false),
  "TentacledPopup": o([
    {json: "voiceSearchDialogRenderer", js: "voiceSearchDialogRenderer", typ: r("VoiceSearchDialogRenderer")},
  ], false),
  "VoiceSearchDialogRenderer": o([
    {json: "placeholderHeader", js: "placeholderHeader", typ: r("DetailsText")},
    {json: "promptHeader", js: "promptHeader", typ: r("DetailsText")},
    {json: "exampleQuery1", js: "exampleQuery1", typ: r("DetailsText")},
    {json: "exampleQuery2", js: "exampleQuery2", typ: r("DetailsText")},
    {json: "promptMicrophoneLabel", js: "promptMicrophoneLabel", typ: r("DetailsText")},
    {json: "loadingHeader", js: "loadingHeader", typ: r("DetailsText")},
    {json: "connectionErrorHeader", js: "connectionErrorHeader", typ: r("DetailsText")},
    {json: "connectionErrorMicrophoneLabel", js: "connectionErrorMicrophoneLabel", typ: r("DetailsText")},
    {json: "permissionsHeader", js: "permissionsHeader", typ: r("DetailsText")},
    {json: "permissionsSubtext", js: "permissionsSubtext", typ: r("DetailsText")},
    {json: "disabledHeader", js: "disabledHeader", typ: r("DetailsText")},
    {json: "disabledSubtext", js: "disabledSubtext", typ: r("DetailsText")},
    {json: "microphoneButtonAriaLabel", js: "microphoneButtonAriaLabel", typ: r("DetailsText")},
    {json: "exitButton", js: "exitButton", typ: r("CloseButtonClass")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "microphoneOffPromptHeader", js: "microphoneOffPromptHeader", typ: r("DetailsText")},
  ], false),
  "PlayerOverlayRendererVideoDetails": o([
    {json: "playerOverlayVideoDetailsRenderer", js: "playerOverlayVideoDetailsRenderer", typ: r("PlayerOverlayVideoDetailsRenderer")},
  ], false),
  "PlayerOverlayVideoDetailsRenderer": o([
    {json: "title", js: "title", typ: r("TitleClass")},
    {json: "subtitle", js: "subtitle", typ: r("DetailsText")},
  ], false),
  "ResponseResponseContext": o([
    {json: "serviceTrackingParams", js: "serviceTrackingParams", typ: a(r("ServiceTrackingParam"))},
    {json: "mainAppWebResponseContext", js: "mainAppWebResponseContext", typ: r("MainAppWebResponseContext")},
    {json: "webResponseContextExtensionData", js: "webResponseContextExtensionData", typ: r("FluffyWebResponseContextExtensionData")},
  ], false),
  "FluffyWebResponseContextExtensionData": o([
    {json: "ytConfigData", js: "ytConfigData", typ: r("YtConfigData")},
    {json: "webPrefetchData", js: "webPrefetchData", typ: r("WebPrefetchData")},
    {json: "hasDecorated", js: "hasDecorated", typ: true},
  ], false),
  "WebPrefetchData": o([
    {json: "navigationEndpoints", js: "navigationEndpoints", typ: a(r("NavigationEndpoint"))},
  ], false),
  "YtConfigData": o([
    {json: "visitorData", js: "visitorData", typ: ""},
    {json: "rootVisualElementType", js: "rootVisualElementType", typ: 0},
  ], false),
  "Topbar": o([
    {json: "desktopTopbarRenderer", js: "desktopTopbarRenderer", typ: r("DesktopTopbarRenderer")},
  ], false),
  "DesktopTopbarRenderer": o([
    {json: "logo", js: "logo", typ: r("Logo")},
    {json: "searchbox", js: "searchbox", typ: r("Searchbox")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "topbarButtons", js: "topbarButtons", typ: a(r("TopbarButton"))},
    {json: "hotkeyDialog", js: "hotkeyDialog", typ: r("HotkeyDialog")},
    {json: "backButton", js: "backButton", typ: r("BackButtonClass")},
    {json: "forwardButton", js: "forwardButton", typ: r("BackButtonClass")},
    {json: "a11ySkipNavigationButton", js: "a11ySkipNavigationButton", typ: r("A11YSkipNavigationButton")},
    {json: "voiceSearchButton", js: "voiceSearchButton", typ: r("ShareButtonClass")},
  ], false),
  "A11YSkipNavigationButton": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("A11YSkipNavigationButtonButtonRenderer")},
  ], false),
  "A11YSkipNavigationButtonButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "isDisabled", js: "isDisabled", typ: true},
    {json: "text", js: "text", typ: r("DetailsText")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "command", js: "command", typ: r("OnResponseReceivedEndpoint")},
  ], false),
  "BackButtonClass": o([
    {json: "buttonRenderer", js: "buttonRenderer", typ: r("BackButtonButtonRenderer")},
  ], false),
  "BackButtonButtonRenderer": o([
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "command", js: "command", typ: r("OnResponseReceivedEndpoint")},
  ], false),
  "HotkeyDialog": o([
    {json: "hotkeyDialogRenderer", js: "hotkeyDialogRenderer", typ: r("HotkeyDialogRenderer")},
  ], false),
  "HotkeyDialogRenderer": o([
    {json: "title", js: "title", typ: r("DetailsText")},
    {json: "sections", js: "sections", typ: a(r("HotkeyDialogRendererSection"))},
    {json: "dismissButton", js: "dismissButton", typ: r("ActionButtonClass")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "HotkeyDialogRendererSection": o([
    {json: "hotkeyDialogSectionRenderer", js: "hotkeyDialogSectionRenderer", typ: r("HotkeyDialogSectionRenderer")},
  ], false),
  "HotkeyDialogSectionRenderer": o([
    {json: "title", js: "title", typ: r("DetailsText")},
    {json: "options", js: "options", typ: a(r("Option"))},
  ], false),
  "Option": o([
    {json: "hotkeyDialogSectionOptionRenderer", js: "hotkeyDialogSectionOptionRenderer", typ: r("HotkeyDialogSectionOptionRenderer")},
  ], false),
  "HotkeyDialogSectionOptionRenderer": o([
    {json: "label", js: "label", typ: r("DetailsText")},
    {json: "hotkey", js: "hotkey", typ: ""},
    {json: "hotkeyAccessibilityLabel", js: "hotkeyAccessibilityLabel", typ: u(undefined, r("AccessibilityData"))},
  ], false),
  "Logo": o([
    {json: "topbarLogoRenderer", js: "topbarLogoRenderer", typ: r("TopbarLogoRenderer")},
  ], false),
  "TopbarLogoRenderer": o([
    {json: "iconImage", js: "iconImage", typ: r("Icon")},
    {json: "tooltipText", js: "tooltipText", typ: r("DetailsText")},
    {json: "endpoint", js: "endpoint", typ: r("TopbarLogoRendererEndpoint")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "overrideEntityKey", js: "overrideEntityKey", typ: ""},
  ], false),
  "TopbarLogoRendererEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("EndpointCommandMetadata")},
    {json: "browseEndpoint", js: "browseEndpoint", typ: r("EndpointBrowseEndpoint")},
  ], false),
  "EndpointBrowseEndpoint": o([
    {json: "browseId", js: "browseId", typ: ""},
  ], false),
  "Searchbox": o([
    {json: "fusionSearchboxRenderer", js: "fusionSearchboxRenderer", typ: r("FusionSearchboxRenderer")},
  ], false),
  "FusionSearchboxRenderer": o([
    {json: "icon", js: "icon", typ: r("Icon")},
    {json: "placeholderText", js: "placeholderText", typ: r("DetailsText")},
    {json: "config", js: "config", typ: r("Config")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "searchEndpoint", js: "searchEndpoint", typ: r("FusionSearchboxRendererSearchEndpoint")},
    {json: "clearButton", js: "clearButton", typ: r("CloseButtonClass")},
  ], false),
  "Config": o([
    {json: "webSearchboxConfig", js: "webSearchboxConfig", typ: r("WebSearchboxConfig")},
  ], false),
  "WebSearchboxConfig": o([
    {json: "requestLanguage", js: "requestLanguage", typ: ""},
    {json: "requestDomain", js: "requestDomain", typ: ""},
    {json: "hasOnscreenKeyboard", js: "hasOnscreenKeyboard", typ: true},
    {json: "focusSearchbox", js: "focusSearchbox", typ: true},
  ], false),
  "FusionSearchboxRendererSearchEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AutoplayVideoCommandMetadata")},
    {json: "searchEndpoint", js: "searchEndpoint", typ: r("SearchEndpointSearchEndpoint")},
  ], false),
  "SearchEndpointSearchEndpoint": o([
    {json: "query", js: "query", typ: ""},
  ], false),
  "TopbarButton": o([
    {json: "topbarMenuButtonRenderer", js: "topbarMenuButtonRenderer", typ: u(undefined, r("TopbarMenuButtonRenderer"))},
    {json: "buttonRenderer", js: "buttonRenderer", typ: u(undefined, r("TopbarButtonButtonRenderer"))},
  ], false),
  "TopbarButtonButtonRenderer": o([
    {json: "style", js: "style", typ: ""},
    {json: "size", js: "size", typ: ""},
    {json: "text", js: "text", typ: r("DetailsText")},
    {json: "icon", js: "icon", typ: r("Icon")},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: r("HilariousNavigationEndpoint")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "targetId", js: "targetId", typ: ""},
  ], false),
  "HilariousNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AutoplayVideoCommandMetadata")},
    {json: "signInEndpoint", js: "signInEndpoint", typ: r("TentacledSignInEndpoint")},
  ], false),
  "TentacledSignInEndpoint": o([
    {json: "idamTag", js: "idamTag", typ: ""},
  ], false),
  "TopbarMenuButtonRenderer": o([
    {json: "icon", js: "icon", typ: r("Icon")},
    {json: "menuRenderer", js: "menuRenderer", typ: u(undefined, r("TopbarMenuButtonRendererMenuRenderer"))},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "accessibility", js: "accessibility", typ: r("AccessibilityData")},
    {json: "tooltip", js: "tooltip", typ: ""},
    {json: "style", js: "style", typ: ""},
    {json: "targetId", js: "targetId", typ: u(undefined, "")},
    {json: "menuRequest", js: "menuRequest", typ: u(undefined, r("MenuRequest"))},
  ], false),
  "TopbarMenuButtonRendererMenuRenderer": o([
    {json: "multiPageMenuRenderer", js: "multiPageMenuRenderer", typ: r("MenuRendererMultiPageMenuRenderer")},
  ], false),
  "MenuRendererMultiPageMenuRenderer": o([
    {json: "sections", js: "sections", typ: a(r("MultiPageMenuRendererSection"))},
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "style", js: "style", typ: ""},
  ], false),
  "MultiPageMenuRendererSection": o([
    {json: "multiPageMenuSectionRenderer", js: "multiPageMenuSectionRenderer", typ: r("MultiPageMenuSectionRenderer")},
  ], false),
  "MultiPageMenuSectionRenderer": o([
    {json: "items", js: "items", typ: a(r("MultiPageMenuSectionRendererItem"))},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "MultiPageMenuSectionRendererItem": o([
    {json: "compactLinkRenderer", js: "compactLinkRenderer", typ: r("CompactLinkRenderer")},
  ], false),
  "CompactLinkRenderer": o([
    {json: "icon", js: "icon", typ: r("Icon")},
    {json: "title", js: "title", typ: r("DetailsText")},
    {json: "navigationEndpoint", js: "navigationEndpoint", typ: r("CompactLinkRendererNavigationEndpoint")},
    {json: "trackingParams", js: "trackingParams", typ: ""},
  ], false),
  "CompactLinkRendererNavigationEndpoint": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AutoplayVideoCommandMetadata")},
    {json: "urlEndpoint", js: "urlEndpoint", typ: r("FluffyURLEndpoint")},
  ], false),
  "FluffyURLEndpoint": o([
    {json: "url", js: "url", typ: ""},
    {json: "target", js: "target", typ: ""},
  ], false),
  "MenuRequest": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "commandMetadata", js: "commandMetadata", typ: r("AcceptCommandCommandMetadata")},
    {json: "signalServiceEndpoint", js: "signalServiceEndpoint", typ: r("MenuRequestSignalServiceEndpoint")},
  ], false),
  "MenuRequestSignalServiceEndpoint": o([
    {json: "signal", js: "signal", typ: ""},
    {json: "actions", js: "actions", typ: a(r("HilariousAction"))},
  ], false),
  "HilariousAction": o([
    {json: "clickTrackingParams", js: "clickTrackingParams", typ: ""},
    {json: "openPopupAction", js: "openPopupAction", typ: r("TentacledOpenPopupAction")},
  ], false),
  "TentacledOpenPopupAction": o([
    {json: "popup", js: "popup", typ: r("StickyPopup")},
    {json: "popupType", js: "popupType", typ: ""},
    {json: "beReused", js: "beReused", typ: true},
  ], false),
  "StickyPopup": o([
    {json: "multiPageMenuRenderer", js: "multiPageMenuRenderer", typ: r("PopupMultiPageMenuRenderer")},
  ], false),
  "PopupMultiPageMenuRenderer": o([
    {json: "trackingParams", js: "trackingParams", typ: ""},
    {json: "style", js: "style", typ: ""},
    {json: "showLoadingSpinner", js: "showLoadingSpinner", typ: true},
  ], false),
  "YtVidMetadataVideoDetails": o([
    {json: "embed", js: "embed", typ: r("Embed")},
    {json: "title", js: "title", typ: ""},
    {json: "description", js: "description", typ: ""},
    {json: "lengthSeconds", js: "lengthSeconds", typ: ""},
    {json: "ownerProfileUrl", js: "ownerProfileUrl", typ: ""},
    {json: "externalChannelId", js: "externalChannelId", typ: ""},
    {json: "isFamilySafe", js: "isFamilySafe", typ: true},
    {json: "availableCountries", js: "availableCountries", typ: a("")},
    {json: "isUnlisted", js: "isUnlisted", typ: true},
    {json: "hasYpcMetadata", js: "hasYpcMetadata", typ: true},
    {json: "viewCount", js: "viewCount", typ: ""},
    {json: "category", js: "category", typ: ""},
    {json: "publishDate", js: "publishDate", typ: Date},
    {json: "ownerChannelName", js: "ownerChannelName", typ: ""},
    {json: "liveBroadcastDetails", js: "liveBroadcastDetails", typ: r("LiveBroadcastDetails")},
    {json: "uploadDate", js: "uploadDate", typ: Date},
    {json: "videoId", js: "videoId", typ: ""},
    {json: "keywords", js: "keywords", typ: a("")},
    {json: "channelId", js: "channelId", typ: ""},
    {json: "isOwnerViewing", js: "isOwnerViewing", typ: true},
    {json: "isCrawlable", js: "isCrawlable", typ: true},
    {json: "isUpcoming", js: "isUpcoming", typ: true},
    {json: "allowRatings", js: "allowRatings", typ: true},
    {json: "author", js: "author", typ: r("Author")},
    {json: "isLowLatencyLiveStream", js: "isLowLatencyLiveStream", typ: true},
    {json: "isPrivate", js: "isPrivate", typ: true},
    {json: "isUnpluggedCorpus", js: "isUnpluggedCorpus", typ: true},
    {json: "latencyClass", js: "latencyClass", typ: ""},
    {json: "isLiveContent", js: "isLiveContent", typ: true},
    {json: "media", js: "media", typ: r("Media")},
    {json: "likes", js: "likes", typ: null},
    {json: "dislikes", js: "dislikes", typ: null},
    {json: "age_restricted", js: "age_restricted", typ: true},
    {json: "video_url", js: "video_url", typ: ""},
    {json: "storyboards", js: "storyboards", typ: a("any")},
    {json: "chapters", js: "chapters", typ: a("any")},
    {json: "thumbnails", js: "thumbnails", typ: a(r("ThumbnailElement"))},
  ], false),
  "BrowseID": [
    "FEhashtag",
    "SPunlimited",
  ],
  "PurpleAPIURL": [
    "/youtubei/v1/browse",
    "/youtubei/v1/feedback",
  ],
  "WebPageType": [
    "WEB_PAGE_TYPE_BROWSE",
    "WEB_PAGE_TYPE_CHANNEL",
    "WEB_PAGE_TYPE_SEARCH",
    "WEB_PAGE_TYPE_UNKNOWN",
    "WEB_PAGE_TYPE_WATCH",
  ],
  "FluffyAPIURL": [
    "/youtubei/v1/account/account_menu",
    "/youtubei/v1/browse/edit_playlist",
    "/youtubei/v1/feedback",
    "/youtubei/v1/get_survey",
    "/youtubei/v1/next",
    "/youtubei/v1/playlist/create",
    "/youtubei/v1/share/get_share_panel",
    "/youtubei/v1/updated_metadata",
  ],
  "ListType": [
    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
  ],
  "Params": [
    "CAQ%3D",
  ],
  "PopupType": [
    "TOAST",
  ],
  "Signal": [
    "CLIENT_SIGNAL",
  ],
  "Label": [
    "LIVE NOW",
    "New",
  ],
  "MetadataBadgeRendererStyle": [
    "BADGE_STYLE_TYPE_LIVE_NOW",
    "BADGE_STYLE_TYPE_SIMPLE",
  ],
  "ThumbnailOverlayTimeStatusRendererStyle": [
    "DEFAULT",
    "LIVE",
  ],
  "AmbitiousAction": [
    "ACTION_REMOVE_VIDEO_BY_VIDEO_ID",
  ],
  "PlaylistID": [
    "WL",
  ],
  "ToggledTooltip": [
    "Added",
  ],
  "CunningAction": [
    "ACTION_ADD_VIDEO",
  ],
  "UntoggledTooltip": [
    "Add to queue",
    "Watch later",
  ],
};
